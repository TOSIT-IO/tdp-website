
import clsx from 'clsx'
import Link from 'next/link'
import Logo from '/src/assets/logo/logo-color-light.svg'

export default function Header({
  className,
  menuTop,
  style,
}) {
  return (
    <header
      className={clsx(
        className,
        'fixed top-0 w-full z-10 h-[60px] border-b border-slate-500',
        'flex'
      )}
      style={style}
    // style={{
    //   background: `radial-gradient(50% 50% at 50% 50%, rgba(14, 11, 22, 0.4) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(17.86% 94.3% at 87.98% 36.67%, rgba(27, 83, 83, 0.35) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(50.96% 97.73% at 18.2% 68.08%, rgba(28, 74, 58, 0.33) 0%, rgba(0, 0, 0, 0) 100%), rgba(30, 44, 42, .95);`,
    // }}
    >
      <div className="w-[300px] py-[12px]">
        <Logo className="h-full m-auto" />
      </div>
      <div className="grow" />
      <ul className={
        "flex items-center gap-6 mr-[200px]"
      }>
        {menuTop.map(page => (
          <li>
            <Link
              className="text-2xl"
              href={`/${page.lang}/${page.slug.join('/')}`}
            >
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
