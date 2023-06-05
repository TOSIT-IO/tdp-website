import Layout from '../[...slug]/layout.js'

export default async function newLayout({
  children,
  params
}) {
  return Layout({
    children,
    params: {
      ...params,
      slug: ['discover', 'sitemap']
    }
  })
}