import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { createSign } from 'crypto'

export const dynamic = 'force-dynamic'


const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_ID ?? '1yA7VTc7ZyMWOgLrbJ-fMHLESlSzY5bPDIvOsgbtwlt8'
const SHEET_NAME = 'Leads'

async function getAccessToken(clientEmail: string, privateKey: string): Promise<string> {
  const formattedKey = privateKey.replace(/\\n/g, '\n')
  const now = Math.floor(Date.now() / 1000)
  const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url')
  const claim = Buffer.from(JSON.stringify({
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  })).toString('base64url')

  const signer = createSign('RSA-SHA256')
  signer.update(`${header}.${claim}`)
  const sig = signer.sign(formattedKey, 'base64url')

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${header}.${claim}.${sig}`,
    }),
  })

  const data = await res.json() as { access_token?: string; error?: string }
  if (!data.access_token) throw new Error(`Token error: ${JSON.stringify(data)}`)
  return data.access_token
}

async function appendToSheet(row: string[]) {
  const envJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  if (!envJson) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON environment variable is missing.')
  }
  
  let creds
  try {
    creds = JSON.parse(envJson)
  } catch (parseErr) {
    throw new Error(`Failed to parse GOOGLE_SERVICE_ACCOUNT_JSON JSON string: ${(parseErr as Error).message}`)
  }

  if (!creds.client_email || !creds.private_key) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON is missing client_email or private_key fields.')
  }

  const token = await getAccessToken(creds.client_email, creds.private_key)

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(SHEET_NAME + '!A:H')}:append?valueInputOption=USER_ENTERED`
  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ values: [row] }),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Sheets API error: ${err}`)
  }
}

async function sendEmail(
  name: string,
  email: string,
  company: string,
  inquiryType: string,
  message: string
) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  await transporter.sendMail({
    from: `"${name}" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER ?? 'mailtoabineshselva@gmail.com',
    replyTo: email,
    subject: `[Portfolio] Contact from ${name}${company ? ` — ${company}` : ''}`,
    html: `
      <h2>New contact inquiry</h2>
      <table>
        <tr><td><strong>Name</strong></td><td>${name}</td></tr>
        <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td><strong>Company</strong></td><td>${company || 'N/A'}</td></tr>
        <tr><td><strong>Inquiry type</strong></td><td>${inquiryType}</td></tr>
      </table>
      <br>
      <p>${message}</p>
    `,
  })
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData()

    const name        = form.get('name')?.toString() ?? ''
    const email       = form.get('email')?.toString() ?? ''
    const company     = form.get('company')?.toString() ?? ''
    const projectType = form.get('project_type')?.toString() ?? 'N/A'
    const message     = form.get('message')?.toString() ?? ''
    const file        = form.get('file') as File | null
    const fileNote    = file && file.size > 0 ? `[attached: ${file.name}]` : ''

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    
    const tasks: Promise<void>[] = []
    
    // Columns: Timestamp, Name, Email, Company, Inquiry Type, Message, File
    tasks.push(appendToSheet([timestamp, name, email, company, projectType, message, fileNote]))

    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      tasks.push(sendEmail(name, email, company, projectType, message))
    }

    const results = await Promise.allSettled(tasks)
    const allFailed = tasks.length > 0 && results.every(r => r.status === 'rejected')

    results.forEach((result, i) => {
      if (result.status === 'rejected') {
        console.error(`Contact method ${i} failed:`, result.reason)
      }
    })

    if (allFailed) {
      const reasons = results
        .filter((r): r is PromiseRejectedResult => r.status === 'rejected')
        .map(r => r.reason instanceof Error ? r.reason.message : String(r.reason))
        .join(' | ')
      throw new Error(`All message delivery methods failed. Reasons: ${reasons}`)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to send message.', 
      error: err instanceof Error ? err.message : String(err) 
    }, { status: 500 })
  }
}
