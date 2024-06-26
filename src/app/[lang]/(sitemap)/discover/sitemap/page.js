import 'server-only'
import redac from 'redac'
import mdx from 'redac/plugins/mdx'
import yaml from 'redac/plugins/yaml'
import Link from 'next/link'

export async function generateStaticParams() {
  return [{
    lang: 'en'
  }]
}

export default async function Page({ params }) {
  const i18n = await fetchI18n({ lang: params.lang})
  const pages = await fetchPages({ lang: params.lang})
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Project sitemap</h1>
      <Sitemap pages={pages} i18n={i18n} />
    </div>
  )
}

export const fetchI18n = async ({ lang}) =>
  await redac([
    {
      plugin: yaml,
      config: './content/i18ns',
    },
  ])
    .from('i18ns')
    .match(lang, ['sitemap'])
    .get()

export const fetchPages = async ({ i18n, lang }) =>
  await redac([
    {
      plugin: mdx,
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
    .filter((page) => page.lang === lang)
    .filter((page) =>
      page.slug[0] === 'dev' ? process.env.NODE_ENV === 'development' : true
    )
    .tree()

export const Sitemap = ({ pages }) => {
  return (
    <ul>
      {pages.map((page) => (
        <li key={page.slug.join('/')}>
          <p>
            <Link href={page.data.redirect || `/${page.lang}/${page.slug.join('/')}`}>
              {page.data.title}
            </Link>
            { page.data.redirect &&
              <span className="text-sm"> (english)</span>
            }
          </p>
          {page.data.description && <p>{page.data.description}</p>}
          {page.children?.length > 1 && (
            <ul>
              {page.children.map((page) => (
                <li key={page.slug.join('/')}>
                  <p>
                    <Link href={page.data.redirect || `/${page.lang}/${page.slug.join('/')}`}>
                      {page.data.title}
                    </Link>
                    { page.data.redirect &&
                      <span className="text-sm"> (english)</span>
                    }
                  </p>
                  {page.data.description && <p>{page.data.description}</p>}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}
