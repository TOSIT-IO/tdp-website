import 'server-only'
import { fetchI18n, fetchPages, Sitemap } from '../../discover/sitemap/page'

export async function generateStaticParams() {
  return [{
    lang: 'fr'
  }]
}

export default async function Page({ params }) {
  const i18n = await fetchI18n({ lang: params.lang})
  const pages = await fetchPages({ lang: params.lang })
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Project sitemap</h1>
      <Sitemap pages={pages} i18n={i18n} />
    </div>
  )
}
