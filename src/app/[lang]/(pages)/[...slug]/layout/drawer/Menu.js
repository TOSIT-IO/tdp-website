import 'server-only'
import clsx from 'clsx'
import Link from 'next/link'
import Logo from '../assets/LogoColorLight.svg'

export default function Menu({
  current,
  link_home,
  pages
}) {
  console.log('pages', pages)
  return (
    <>
      <div
        className={clsx(
          "my-5 h-[3rem] w-auto xl:w-[400px] flex",
        )}
      >
        <Link
          className="relative w-full"
          href={link_home}
        >
          <Logo className="h-full m-auto" />
        </Link>
      </div>
      <Ul
        className="pb-10"
        pages={pages}
        current={current}
      />
    </>
  )
}

const Li = function Li({current, page}){
  return (
    <li
      className="my-2"
    >
      { page.data.section
        ? <span
            className="italic font-extralight text-white/50 py-4"
          >
            {page.data.nav_title || page.data.title}
          </span>
        : <Link
            className={clsx(
              "hover:text-[#00FFFA]",
              JSON.stringify(current) === JSON.stringify(page.slug)
              ? "text-white"
              : "text-white/70 hover:text-[#00FFFA]"
            )}
            href={`/${page.lang}/${page.slug.join('/')}`}
          >
            {page.data.nav_title || page.data.title}
          </Link>
      }
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
