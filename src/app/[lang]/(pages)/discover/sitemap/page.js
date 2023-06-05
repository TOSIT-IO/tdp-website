import 'server-only'
import clsx from 'clsx'
import redac from 'redac'
import mdx from 'redac/plugins/mdx'
import Link from 'next/link'

export async function generateStaticParams({ params }) {
  return [{
    lang: 'en'
  }, {
    lang: 'fr'
  }]
}

export default async function Page({ params }) {
  const sitemap = await redac([
    {
      module: mdx,
      config: './content/pages',
    },
  ])
    .from('pages')
    .map((page) => ({
      data: {
        redirect: page.data.redirect,
        nav_title: page.data.nav_title,
        section: page.data.section,
        nav_title: page.data.nav_title,
        title: page.data.title,
      },
      lang: page.lang || 'en',
      slug: page.slug,
    }))
    .filter((page) => page.lang === params.lang)
    .filter((page) =>
      page.slug[0] === 'dev' ? process.env.NODE_ENV === 'development' : true
    )
    .tree()
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Project sitemap</h1>
      <ul>
        {sitemap.map((page) => (
          <li key={page.slug.join('/')}>
            <p>
              <Link href={`/${page.lang}/${page.slug.join('/')}`}>
                {page.data.title}
              </Link>
            </p>
            {page.data.description && <p>{page.data.description}</p>}
            {page.children?.length && (
              <ul>
                {page.children.map((page) => (
                  <li key={page.slug.join('/')}>
                    <p>
                      <Link href={`/${page.lang}/${page.slug.join('/')}`}>
                        {page.data.title}
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
