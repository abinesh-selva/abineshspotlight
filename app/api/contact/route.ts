import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData()

    const name        = form.get('name')?.toString() ?? ''
    const email       = form.get('email')?.toString() ?? ''
    const company     = form.get('company')?.toString() ?? ''
    const projectType = form.get('project_type')?.toString() ?? ''
    const budget      = form.get('budget')?.toString() ?? ''
    const timeline    = form.get('timeline')?.toString() ?? ''
    const message     = form.get('message')?.toString() ?? ''

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
      subject: `[Portfolio] New project brief from ${name} — ${company}`,
      html: `
        <h2>New project brief</h2>
        <table style="border-collapse:collapse;font-family:monospace;font-size:13px">
          <tr><td style="padding:6px 16px 6px 0;color:#6B7565">Name</td><td><strong>${name}</strong></td></tr>
          <tr><td style="padding:6px 16px 6px 0;color:#6B7565">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:6px 16px 6px 0;color:#6B7565">Company</td><td>${company}</td></tr>
          <tr><td style="padding:6px 16px 6px 0;color:#6B7565">Project type</td><td>${projectType}</td></tr>
          <tr><td style="padding:6px 16px 6px 0;color:#6B7565">Budget</td><td>${budget}</td></tr>
          <tr><td style="padding:6px 16px 6px 0;color:#6B7565">Timeline</td><td>${timeline}</td></tr>
        </table>
        <br>
        <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 })
  }
}
