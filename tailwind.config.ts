import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#1a3a6b',
          light: '#2952a3',
          muted: '#1a3a6b26',
        },
        surface: {
          DEFAULT: '#fafafa',
          dark: '#0d0d0f',
          card: '#f4f4f5',
          'card-dark': '#18181b',
          border: '#e4e4e7',
          'border-dark': '#27272a',
        },
        ink: {
          DEFAULT: '#09090b',
          muted: '#52525b',
          faint: '#a1a1aa',
        },
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'slide-in': 'slideIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            color: '#09090b',
            '--tw-prose-headings': '#09090b',
            '--tw-prose-links': '#1a3a6b',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
