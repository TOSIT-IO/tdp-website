import 'server-only'
import Footer from '@/layout/footer/index.jsx'

export default async function RootLayout(props) {
  const params = await props.params;

  const {
    children
  } = props;

  return (
    <>
      {children}
      <Footer lang={params.lang} />
    </>
  )
}
