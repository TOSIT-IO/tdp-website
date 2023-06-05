import 'server-only'
import clsx from 'clsx'
import Link from 'next/link'
import Logo from '../assets/LogoColorLight.svg'
import Github from '../assets/Github.svg'
import Lang from '../assets/Lang.svg'
import Drawer from '../drawer'
import Menu from '../drawer/Menu'

export default function Header({
  className,
  current,
  home=false, // left side doesnt get a dark bg in homepage
  link_home,
  sitemap,
  style,
}) {
  return (
    <>
      <header
        className={clsx(
          className,
          "flex",
          "border-b border-slate-500 px-6 xl:pl-0",
        )}
        style={style}
      >
        <div
          className={clsx(
            "h-full w-auto xl:w-[400px] py-[12px] flex",
            home || "xl:bg-black/20 xl:border-r xl:border-r-white/10",
            // "text-center",
          )}
        >
          <Link
            className="relative w-full"
            href={link_home}
          >
            <Logo className="h-full m-auto" />
          </Link>
        </div>
        <ul className={
          "grow flex items-center justify-end"
        }>
          {sitemap.map(page => (
            <li
              key={page.slug.join('/')}
              className={clsx(
                "flex items-center",
                "hidden lg:block",
              )}
            >
              <Link
                className={clsx(
                  "text-lg md:text-xl px-3 md:px-6",
                  "inline-block hover:text-[#00FFFA]",
                  JSON.stringify(current) === JSON.stringify(page.slug)
                  ? "text-white"
                  : "text-white/70 hover:text-[#00FFFA]"
                )}
                href={`/${page.lang}/${page.slug.join('/')}`}
              >
                {page.nav_title || page.title}
              </Link>
            </li>
          ))}
          <li className="flex items-stretch">
            <a
              className={clsx(
                "flex items-center px-3",
                "hover:text-[#00FFFA] [&>svg_*]:hover:fill-[#00FFFA]",
              )}
              href="https://github.com/TOSIT-FR/TDP"
              title="GitHub project repository"
            >
              <Github className="w-5 h-5" />
            </a>
          </li>
          <li className="flex items-stretch">
            <a
              className={clsx(
                "flex items-center pl-3",
                "hover:text-[#00FFFA] [&>svg_*]:hover:fill-[#00FFFA]",
              )}
              href="/"
              title="Page translatation"
            >
              <Lang className="w-5 h-5" />
            </a>
          </li>
          <li className="block lg:hidden">
            <Drawer>
              <Menu pages={sitemap} current={current} />
            </Drawer>
          </li>
        </ul>
      </header>
    </>
  )
}
