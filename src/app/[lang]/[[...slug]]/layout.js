import clsx from 'clsx'
import engine from '/src/engine/index.js'
import Left from '../../layout/left'

export default async function ({ children, params }) {
  const menuLeft = await engine('./content')
    .from('pages')
    .filter((page) => page.lang === 'en' && page.slug[0] === params.slug[0])
    .map((page) => ({
      lang: page.lang,
      title: page.data.nav_title || page.data.title,
      section: page.data.section,
      slug: page.slug,
    }))
    .tree()
    .get()
  return (
    <>
      <div
        className={clsx(
          'pt-[8rem] pb-5',
          'w-[400px] [&>*]:w-[300px] [&>*]:ml-[80px] [&>*]:mr-[20px]',
          'border-r border-r-white/40'
        )}
        style={{
          background: `rgba(0, 0, 0, 0.13)`,
        }}
      >
        <Left className={clsx('sticky top-20')} menuLeft={menuLeft} />
      </div>
      <div className="grow relative">
        <main className="max-w-4xl m-auto py-40">{children}</main>
      </div>
    </>
  )
}
