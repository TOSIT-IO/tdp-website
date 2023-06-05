import 'server-only'
import redac from 'redac'
import yaml from 'redac/plugins/yaml'
import clsx from 'clsx'
import Link from 'next/link'

export default async function Footer({
  className,
  lang,
}){
  // Fix bug where `dynamicParams = false` is not honored for `[lang]`
  // and "/favicon.png" is requested.
  // It might be due to early usage of static exports in Next.js version 13.
  lang = lang === 'fr' ? 'fr' : 'en'
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
  )
}
