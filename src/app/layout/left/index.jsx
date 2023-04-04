
import clsx from 'clsx'
import { LiSection, LiChildOfSection, Li, Ul } from './MenuItems'

export default function Left({
  className,
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
      <Ul pages={pages} level={level+1} />
    </aside>
  )
}
