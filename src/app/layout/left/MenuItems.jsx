'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

export const Ul = function ({
  level,
  pages,
  parentIsSection,
}) {
  return (
    <ul>
      { pages.map((page, i) => (
        page.section
        ? <LiSection
          key={page.slug.join('/')}
          page={page}
          level={level}
          last={i === pages.length - 1}
        />
        : parentIsSection
        ? <LiChildOfSection
        key={page.slug.join('/')}
        page={page}
        level={level}
        last={i === pages.length - 1}
      />
        : <Li
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
  level,
  last,
  page,
}) {
  return (
    <li key={page.slug.join('/')}>
      <h2 className="italic font-extralight text-white/50 py-4">
        {page.title}
      </h2>
      <Ul pages={page.children} level={level+1} parentIsSection={true} />
    </li>
  )
}

export const LiChildOfSection = function ({
  level,
  last,
  page,
}) {
  const segment = useSelectedLayoutSegments()
  const href = `/${page.lang}/${page.slug.join('/')}`
  const current = '/'+segment.join('/') === href
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
                current
                ? "text-white"
                : "text-white/70 hover:text-[#00FFFA]"
              )}
              href={href}
            >
              {page.title}
            </Link>
            <Ul pages={page.children} level={level+1} />
          </div>
        </div>
      </div>
    </li>
  )
}

export const Li = function ({
  level,
  last,
  page,
}) {
  const segment = useSelectedLayoutSegments()
  const href = `/${page.lang}/${page.slug.join('/')}`
  const current = '/'+segment.join('/') === href
  return (
    <li>
      <Link
        className={clsx(
          "py-2",
          current
          ? "text-white"
          : "text-white/70 hover:text-[#00FFFA]"
        )}
        href={`/${page.lang}/${page.slug.join('/')}`}
      >
        {page.title}
      </Link>
      <Ul pages={page.children} level={level+1} />
    </li>
  )
}
