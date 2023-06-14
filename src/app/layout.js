import 'server-only'
import clsx from 'clsx'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const fira = Fira_Code({ subsets: ['latin'], variable: '--font-fira' })

export const metadata = {
  title: {
    template: '%s | TDP',
    default: 'TDP open source big data platform'
  },
  description: 'TDP is a 100% open source big data platform based on the Hadoop ecosystem.',
  icons: {
    icon: '/favicon.svg',
  },
  // Maybe follow the [`humans.txt` initiative](https://humanstxt.org/)
  authors: [{ name: 'David Worms', url: 'https://adaltas.com' }],
  category: 'technology',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          'relative h-full text-slate-200 dark bg-[#263134]',
          inter.variable,
          'font-sans',
          fira.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
