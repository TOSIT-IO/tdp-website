import 'server-only'
import clsx from 'clsx'

export default function Footer({
  className
}){
  return (
    <footer
      className={clsx(
        className,
        'prose prose-invert',
      )}
    >
      footer goes here
    </footer>
  )
}
