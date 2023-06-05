import 'server-only'
import path from 'node:path'
import clsx from 'clsx'
import redac from 'redac'
import mdx from 'redac/plugins/mdx'
import Header from './layout/header'
import Left from './layout/left'

// Util function
const extractSharedPath = (name) => {
  const basename = path.basename(name)
  if (/^(\d+\.)?index\./.test(basename)){
    return path.dirname(name)
  } else {
    return path.dirname(name) + '/' + /^((\d+\.)?\w+)\./.exec(basename)?.[1]
  }
}

export default async function Layout({
  children,
  params
}) {
  const content = redac([
    {
      module: mdx,
      config: './content/pages',
    },
  ])
  const sitemap = await content
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
  // Current page
  const currentPage = await content
    .from('pages')
    // todo: remove when redac get default values
    .map((page) => ({
      ...page,
      lang: page.lang || 'en',
    }))
    // .match(params.lang, params.slug)
    .filter( page => {
      if(page.lang !== params.lang) return false
      if(JSON.stringify(page.slug) !== JSON.stringify(params.slug)) return false
      return true
    })
    .map(page => ({
      path_t9n: extractSharedPath(page.path_relative)
    }))
    .get()
  // Page translations if any, share the same parent directory
  const t9ns = await content
    .from('pages')
    // todo: remove when redac get default values
    .map((page) => ({
      ...page,
      lang: page.lang || 'en',
    }))
    // Redirect pages are no translation
    .filter(page => !page.data.redirect)
    // This is a bit touchy, maybe redac could provide with
    // a parent property, doing it here for now
    .filter(page => {
      const path_t9n = extractSharedPath(page.path_relative)
      return page.lang !== params.lang && currentPage?.path_t9n === path_t9n
    })
    .map(page => ({
      lang: page.lang,
      slug: page.slug,
      data: {
        title: page.data.title,
      },
    }))
  const menuLeft = sitemap.filter( page =>
    page.slug[0] === params.slug[0]
  )[0]
  return (
    <>
      <Header
        current={params.slug}
        link_home={`/${params.lang}`}
        sitemap={sitemap}
        className={clsx(
          'fixed top-0 w-full z-10 h-[60px]',
        )}
        style={{
          background: `radial-gradient(50% 50% at 50% 50%, rgba(14, 11, 22, 0.12) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(17.86% 94.3% at 87.98% 36.67%, rgba(27, 83, 83, 0.18) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(50.96% 97.73% at 18.2% 68.08%, rgba(28, 74, 74, 0.26) 0%, rgba(0, 0, 0, 0) 100%), rgba(44, 48, 49, 0.90)`,
        }}
        t9ns={t9ns}
      />
      <div
        className="w-full h-full flex min-h-screen"
        style={{
          background: `radial-gradient(23.91% 23.92% at 14.33% 30.99%, rgba(19, 10, 39, 0.2) 0%, rgba(32, 10, 39, 0) 100%), radial-gradient(37.93% 37.93% at 85.72% 23.89%, rgba(4, 11, 18, 0.2) 0%, rgba(58, 95, 129, 0) 100%), radial-gradient(25.52% 25.52% at 24.55% 76.74%, rgba(95, 116, 97, 0.2) 0%, rgba(45, 67, 48, 0) 100%), radial-gradient(42.95% 42.95% at 21.12% 25.63%, rgba(97, 130, 120, 0.2) 0%, rgba(122, 159, 132, 0) 100%), radial-gradient(63.47% 63.46% at 31.32% 63.18%, rgba(64, 86, 142, 0.2) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(19.87% 43.71% at 73.92% 40.01%, rgba(122, 159, 132, 0.116) 0%, rgba(40, 52, 59, 0.056) 100%), #263134`,
        }}
      >
        <div
          className={clsx(
            "hidden lg:block",
            'pt-[8rem] pb-5',
            "w-[300px] xl:w-[400px]",
            "[&>*]:xl:w-[300px] [&>*]:mx-6 [&>*]:xl:ml-[80px] [&>*]:xl:mr-[20px]",
            'border-r border-r-white/40'
          )}
          style={{
            background: `rgba(0, 0, 0, 0.13)`,
          }}
        >
          <Left
            className={clsx(
              "sticky top-20 text-sm",
            )}
            current={params.slug}
            menuLeft={menuLeft}
          />
        </div>
        <div className="grow relative">
          <main className="max-w-4xl px-6 m-auto py-40">{children}</main>
        </div>
      </div>
    </>
  )
}
