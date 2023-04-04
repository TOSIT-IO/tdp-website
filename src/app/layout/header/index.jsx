
import clsx from 'clsx'
import Link from 'next/link'
import Logo from '../logo/logo-color-light.svg'
import Github from '../icons/github.svg'
import Lang from '../icons/lang.svg'

export default function Header({
  className,
  menuTop,
  style,
}) {
  return (
    <header
      className={className}
      style={style}
    >
      <div className="w-[400px] py-[12px] bg-black/20 flex border-r border-r-white/10">
        <Logo className="h-full m-auto" />
      </div>
      <div className="grow max-w-4xl m-auto ">
        <ul className={
          "w-full flex justify-end"
        }>
          {menuTop.map(page => (
            <li key={page.slug.join('/')} className="flex items-center">
              <Link
                className="text-xl px-6 inline-block hover:text-[#00FFFA]"
                href={`/${page.lang}/${page.slug.join('/')}`}
              >
                {page.title}
              </Link>
            </li>
          ))}
          <li className="flex items-stretch">
            <a
              className={clsx(
                "flex items-center px-6",
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
                "flex items-center pl-6",
                "hover:text-[#00FFFA] [&>svg_*]:hover:fill-[#00FFFA]",
              )}
              href="/"
              title="Page translatation"
            >
              <Lang className="w-5 h-5" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
