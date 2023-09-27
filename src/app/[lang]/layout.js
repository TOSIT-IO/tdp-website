import 'server-only'
import Footer from '@/layout/footer/index.jsx'

export default async function RootLayout({ children, params }) {
  return (
    <>
      {children}
      <Footer lang={params.lang} />
    </>
  )
}
