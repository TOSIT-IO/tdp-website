import 'server-only'
import clsx from 'clsx'
import Link from 'next/link'

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
      <h1 className="sr-only">Menu for {page.data.title}</h1>
      <Ul current={current} pages={pages} level={level+1} />
    </aside>
  )
}

export const Ul = function ({
  current,
  level,
  pages,
  parentIsSection,
}) {
  return (
    <ul>
      {pages.map((page, i) => (
        page.data.section
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
            : <LiRoot
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

export const LiRoot = function ({
  current,
  level,
  page,
}) {
  return (
    <li className="relative">
      <Link
        className={clsx(
          "block pb-2",
          JSON.stringify(current) === JSON.stringify(page.slug)
          ? "text-white"
          : "text-white/70 hover:text-[#00FFFA]"
        )}
        href={`/${page.lang}/${page.slug.join('/')}`}
      >
        {page.data.nav_title || page.data.title}
      </Link>
      <Ul current={current} pages={page.children} level={level+1} />
    </li>
  )
}

export const LiSection = function ({
  current,
  level,
  page,
}) {
  return (
    <li key={page.slug.join('/')}>
      <h2 className="italic font-extralight text-white/50 py-4">
        {page.data.nav_title || page.data.title}
      </h2>
      { page.children?.length > 0 &&
        <Ul current={current} pages={page.children} level={level+1} parentIsSection={true} />
      }
    </li>
  )
}

export const LiChildOfSection = function ({
  current,
  level,
  last,
  page,
}) {
  return (
    <li key={page.slug.join('/')} className="relative">
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
                "block pb-2",
                JSON.stringify(current) === JSON.stringify(page.slug)
                ? "text-white"
                : "text-white/70 hover:text-[#00FFFA]"
              )}
              href={`/${page.lang}/${page.slug.join('/')}`}
            >
              {page.data.nav_title || page.data.title}
            </Link>
            { page.children?.length > 0 &&
              <Ul current={current} pages={page.children} level={level+1} />
            }
          </div>
        </div>
    </li>
  )
}
