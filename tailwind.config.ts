import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F5F1EC',
        paper:  '#EBE5DC',
        ink:    '#0F3728',
        accent: '#DCBC7D',
        forest: '#14503E',
        blush:  '#F5B8AE',
        mist:   '#4A5446',
        rule:   '#DDD5C5',
      },
      fontFamily: {
        sans:    ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
        mono:    ['var(--font-sans)', 'monospace'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDelay: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}

export default config
