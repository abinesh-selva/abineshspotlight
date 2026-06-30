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
        mist:   '#6B7565',
        rule:   '#DDD5C5',
      },
      fontFamily: {
        sans:    ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
        mono:    ['var(--font-sans)', 'sans-serif'],
      },
      animation: {
        'marquee':         'marquee-left 38s linear infinite',
        'marquee-reverse': 'marquee-right 38s linear infinite',
      },
      keyframes: {
        'marquee-left': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
