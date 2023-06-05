import 'server-only'
import Footer from './(pages)/[...slug]/layout/footer/index.jsx'

export default async function RootLayout({ children, params }) {
  return (
    <>
      {children}
      <div
        className="p-10 border-t-2 border-slate-500"
        style={{
          background: `linear-gradient(154.09deg, rgba(0, 0, 0, 0.2) 16.35%, rgba(0, 0, 0, 0) 39.32%), radial-gradient(14.08% 17.22% at 86.26% 77.02%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(31.27% 31.27% at 81.13% 24.31%, rgba(86, 80, 28, 0.2) 0%, rgba(11, 36, 32, 0) 100%), radial-gradient(26.56% 26.56% at 19.78% 70.31%, rgba(54, 22, 28, 0.2) 0%, rgba(10, 14, 27, 0) 100%), linear-gradient(180deg, #2F3A44 0%, #202B2B 100%)`,
        }}
      >
        <Footer lang={params.lang} />
      </div>
    </>
  )
}
