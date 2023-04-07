
import clsx from 'clsx'
import Link from 'next/link'
import Logo from '../logo/logo-color-light.svg'
import Github from '../icons/github.svg'
import Lang from '../icons/lang.svg'
import Drawer from '../drawer'

export default function Header({
  className,
  current,
  menuTop,
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
            "h-full xl:w-[400px] py-[12px] flex",
            "xl:bg-black/20 xl:border-r xl:border-r-white/10"
          )}
        >
          <Logo className="h-full m-auto" />
        </div>
        <ul className={
          "grow flex items-center justify-end"
        }>
          {menuTop.map(page => (
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
                {page.title}
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
            <Drawer open={true}/>
          </li>
        </ul>
      </header>
    </>
  )
}
