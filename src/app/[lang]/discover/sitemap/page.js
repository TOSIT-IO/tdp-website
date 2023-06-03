import 'server-only'
import clsx from 'clsx'
import redac from 'redac'
import mdx from 'redac/plugins/mdx'
import Link from 'next/link'

export default async function Page({ params }) {
  const sitemap = await redac([
    {
      module: mdx,
      config: './content/pages',
    },
  ])
    .from('pages')
    .map((page) => ({
      nav_title: page.data.nav_title,
      lang: page.lang || 'en',
      section: page.data.section,
      slug: page.slug,
      title: page.data.nav_title || page.data.title,
      data: page.data,
    }))
    .filter((page) => page.lang === params.lang)
    .filter((page) =>
      page.slug[0] === 'dev' ? process.env.NODE_ENV === 'development' : true
    )
    .tree()
  const page = await redac([
    {
      module: mdx,
      config: './content/pages',
    },
  ])
    .from('pages')
    .map((page) => ({
      ...page,
      lang: page.lang || 'en',
    }))
    .filter(
      (page) =>
        page.lang === params.lang &&
        JSON.stringify(page.slug) === JSON.stringify(params.slug)
    )
    .get()
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Project sitemap</h1>
      <ul>
        {sitemap.map((page) => (
          <li>
            <p>
              <Link href={`/${page.lang}/${page.slug.join('/')}`}>
                {page.title}
              </Link>
            </p>
            {page.data.description && <p>{page.data.description}</p>}
            {page.children && (
              <ul>
                {page.children.map((page) => (
                  <li>
                    <p>
                      <Link href={`/${page.lang}/${page.slug.join('/')}`}>
                        {page.title}
                      </Link>
                    </p>
                    {page.data.description && <p>{page.data.description}</p>}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
