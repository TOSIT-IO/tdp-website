import Layout from '../(pages)/[...slug]/layout.js'

export default async function newLayout({
  children,
  params
}) {
  return Layout({
    children,
    params: {
      ...params,
      slug: params.lang === 'fr' ?  ['decouvrir', 'plan-site'] : ['discover', 'sitemap']
    }
  })
}
