
import inter from 'tailwindcss-font-inter'
import typography from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "!./node_modules",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    // inter,
    typography,
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@headlessui/tailwindcss'),
  ],
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
    fontSize: {},
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}

