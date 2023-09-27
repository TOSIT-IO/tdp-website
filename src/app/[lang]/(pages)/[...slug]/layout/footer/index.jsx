import 'server-only'
import redac from 'redac'
import yaml from 'redac/plugins/yaml'
import clsx from 'clsx'
import Link from 'next/link'

export default async function Footer({
  className,
  lang,
}){
  // Homepage prefered address is `/` and not `/en`
  lang = lang ?? 'en'
  const i18n = await redac([
    {
      module: yaml,
      config: './content/i18ns',
    },
  ])
    .from('i18ns')
    .match(lang, ['footer'])
    .map(params => params.data)
    .get()
  return (
    <div
      className="border-t-2 border-slate-500"
      style={{
        background: `linear-gradient(154.09deg, rgba(0, 0, 0, 0.2) 16.35%, rgba(0, 0, 0, 0) 39.32%), radial-gradient(14.08% 17.22% at 86.26% 77.02%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(31.27% 31.27% at 81.13% 24.31%, rgba(86, 80, 28, 0.2) 0%, rgba(11, 36, 32, 0) 100%), radial-gradient(26.56% 26.56% at 19.78% 70.31%, rgba(54, 22, 28, 0.2) 0%, rgba(10, 14, 27, 0) 100%), linear-gradient(180deg, #2F3A44 0%, #202B2B 100%)`,
      }}
    >
      <footer
        className={clsx(
          className,
        )}
      >
        <ul className={clsx(
          "max-w-4xl px-6 m-auto",
          "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-0 py-10",
          "[&_h2]:mb-3 [&_h2]:italic [&_h2]:font-extralight [&_h2]:text-white/50"
        )}>
          <li>
            <h2>{i18n.firststep}</h2>
            <ul>
              <li>
                <Link
                  className="text-white/70 hover:text-[#00FFFA]"
                  href={`/${lang}/discover`}
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
                  href={lang === 'en' ? `/en/discover/sitemap` : `/fr/decouvrir/plan-site`}
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h2>{i18n.advanced}</h2>
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
            <h2>{i18n.community}</h2>
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
                  href="https://github.com/TOSIT-IO/TDP/blob/main/LICENSE"
                  target="_blank"
                >
                  License
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </div>
  )
}
