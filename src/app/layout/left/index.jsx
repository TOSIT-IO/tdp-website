
import clsx from 'clsx'
import Link from 'next/link'

const Ul = function ({
  level,
  page,
}) {
  return (
    <ul>
      { page.children.map(page => (
        <Li page={page} level={level} />
      ))}
    </ul>
  )
}

const Li = function ({
  level,
  page,
}) {
  return (
    <li>
      { page.section
        ? <h2 className="italic font-extralight text-slate-400">{page.title}</h2>
        : <Link
          href={`/${page.lang}/${page.slug.join('/')}`}
        >
          {page.title}
        </Link>
      }

      <Ul page={page} level={level+1} />
    </li>
  )
}

export default function Left({
  className,
  menuLeft:page,
  level=0,
}) {
  return (
    <aside
      className={clsx(
        className,
      )}
    >
      <h1 className="sr-only">Menu for {page.title}</h1>
      <Ul page={page} level={level+1} />
    </aside>
  )
}
