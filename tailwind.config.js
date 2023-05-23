
import typographyPlugin from '@tailwindcss/typography'
import typography from './typography'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    typographyPlugin,
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@headlessui/tailwindcss'),
  ],
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
    // fontSize: {},
    extend: {
      typography: typography,
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-fira)', ...defaultTheme.fontFamily.mono],
      },
    },
  },
}
