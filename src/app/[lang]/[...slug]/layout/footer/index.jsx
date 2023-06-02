import 'server-only'
import clsx from 'clsx'
import Link from 'next/link'

export default function Footer({
  className,
  lang,
  page,
}){
  return (
    <footer
      className={clsx(
        className,
      )}
    >
      <ul className={clsx(
        "max-w-4xl px-6 m-auto",
        "grid grid-cols-3",
        "[&_h2]:mb-3 [&_h2]:italic [&_h2]:font-extralight [&_h2]:text-white/50"
      )}>
        <li>
          <h2>First steps</h2>
          <ul>
            <li>
              <Link
                className="text-white/70 hover:text-[#00FFFA]"
                href={`/${lang}/discover}`}
              >
                Discover
              </Link>
            </li>
            <li>
              <Link
                className="text-white/70 hover:text-[#00FFFA]"
                href={`/${lang}/learn/getting-started`}
              >
                Getting started
              </Link>
            </li>
            <li>
              <Link
                className="text-white/70 hover:text-[#00FFFA]"
                href={`#`}
              >
                Download
              </Link>
            </li>
            <li>
              <Link
                className="text-white/70 hover:text-[#00FFFA]"
                href={`#`}
              >
                Sitemap
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>Advance usage</h2>
          <ul>
            <li>
              <Link
                className="text-white/70 hover:text-[#00FFFA]"
                href={`#`}
              >
                Configuration
              </Link>
            </li>
            <li>
              <Link
                className="text-white/70 hover:text-[#00FFFA]"
                href={`#`}
              >
                Using the CLI
              </Link>
            </li>
            <li>
              <Link
                className="text-white/70 hover:text-[#00FFFA]"
                href={`#`}
              >
                Rest API
              </Link>
            </li>
            <li>
              <Link
                className="text-white/70 hover:text-[#00FFFA]"
                href={`#`}
              >
                Advanced usage
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>Developper community</h2>
          <ul className="space-y-1">
            <li>
              <a
                className="text-white/70 hover:text-[#00FFFA]"
                href="https://github.com/TOSIT-IO/TDP"
                target="_blank"
              >
                GitHub repository
              </a>
            </li>
            <li>
              <a
                className="text-white/70 hover:text-[#00FFFA]"
                href="https://github.com/TOSIT-IO/TDP/issues"
                target="_blank"
              >
                Issues
              </a>
            </li>
            <li>
              <a
                className="text-white/70 hover:text-[#00FFFA]"
                href="https://github.com/orgs/TOSIT-IO/discussions"
                target="_blank"
              >
                Discussions
              </a>
            </li>
            <li>
              <a
                className="text-white/70 hover:text-[#00FFFA]"
                href="https://github.com/orgs/TOSIT-IO/discussions"
                target="_blank"
              >
                License
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  )
}
