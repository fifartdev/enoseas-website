import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#0A192F',
        'cyan-accent': '#00B4D8',
        'teal-accent': '#00F5D4',
        'emerald-accent': '#2ECC71',
        'slate': {
          '50': '#f8fafc',
          '700': '#334155',
          '800': '#1e293b',
          '900': '#0f172a',
        },
      },
      backdropBlur: {
        md: '12px',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
        tech: ['Syncopate', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
