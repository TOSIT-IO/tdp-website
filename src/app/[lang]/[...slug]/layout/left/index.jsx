import 'server-only'
import clsx from 'clsx'
import Link from 'next/link'

export const Ul = function ({
  current,
  level,
  pages,
  parentIsSection,
}) {
  return (
    <ul>
      {pages.map((page, i) => (
        page.section
          ? <LiSection
            current={current}
            key={page.slug.join('/')}
            page={page}
            level={level}
            last={i === pages.length - 1}
          />
          : parentIsSection
            ? <LiChildOfSection
              current={current}
              key={page.slug.join('/')}
              page={page}
              level={level}
              last={i === pages.length - 1}
            />
            : <Li
              current={current}
              key={page.slug.join('/')}
              page={page}
              level={level}
              last={i === pages.length - 1}
            />
      ))}
    </ul>
  )
}

export const LiSection = function ({
  current,
  level,
  last,
  page,
}) {
  return (
    <li key={page.slug.join('/')}>
      <h2 className="italic font-extralight text-white/50 py-4">
        {page.title}
      </h2>
      <Ul current={current} pages={page.children} level={level+1} parentIsSection={true} />
    </li>
  )
}

export const LiChildOfSection = function ({
  current,
  level,
  last,
  page,
}) {
  const href = `/${page.lang}/${page.slug.join('/')}`
  return (
    <li key={page.slug.join('/')}>
      <div className="relative pb-2">
        {last ||
          <span className="absolute left-1 top-2 -ml-px h-full w-0.5 bg-white/40" aria-hidden="true" />
        }
        <div className="relative flex space-x-3">
          <div className="mt-2">
            <span
              className={clsx(
                'bg-[#00FFFA]',
                'h-2 w-2 rounded-full flex items-center justify-center ring-2 ring-black/40'
              )}
            />
          </div>
          <div className="space-y-1">
            <Link
              className={clsx(
                "py-4",
                JSON.stringify(current) === JSON.stringify(page.slug)
                ? "text-white"
                : "text-white/70 hover:text-[#00FFFA]"
              )}
              href={href}
            >
              {page.title}
            </Link>
            <Ul current={current} pages={page.children} level={level+1} />
          </div>
        </div>
      </div>
    </li>
  )
}

export const Li = function ({
  current,
  level,
  last,
  page,
}) {
  const href = `/${page.lang}/${page.slug.join('/')}`
  return (
    <li>
      <Link
        className={clsx(
          "py-2",
          JSON.stringify(current) === JSON.stringify(page.slug)
          ? "text-white"
          : "text-white/70 hover:text-[#00FFFA]"
        )}
        href={`/${page.lang}/${page.slug.join('/')}`}
      >
        {page.title}
      </Link>
      <Ul current={current} pages={page.children} level={level+1} />
    </li>
  )
}

export default function Left({
  className,
  current,
  menuLeft:page,
  level=0,
  style,
}) {
  const pages = page.children
  return (
    <aside
      className={clsx(
        className,
      )}
      style={style}
    >
      <h1 className="sr-only">Menu for {page.title}</h1>
      <Ul current={current} pages={pages} level={level+1} />
    </aside>
  )
}
