import 'server-only'
import clsx from 'clsx'
import Link from 'next/link'

const Li = function Li({current, page}){
  return (
    <li
      className={clsx()}
    >
      <Link
        className={clsx(
          "hover:text-[#00FFFA]",
          JSON.stringify(current) === JSON.stringify(page.slug)
          ? "text-white"
          : "text-white/70 hover:text-[#00FFFA]"
        )}
        href={`/${page.lang}/${page.slug.join('/')}`}
      >
        {page.title}
      </Link>
      <Ul pages={page.children} current={current} />
    </li>
  )
}

const Ul = function Ul({ className, current, pages = [] }) {
  return (
    <ul
      className={clsx(
        className,
        '[&_ul_li]:pl-3',
      )}
    >
      {pages.map(page => (
        <Li
          key={page.slug.join('/')}
          page={page}
          current={current}
        />
      ))}
    </ul>
  )
}

export default function Menu({
  current,
  pages
}) {
  return (
    <Ul
      className="py-10"
      pages={pages}
      current={current}
    />
  )
}
