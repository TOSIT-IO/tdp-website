import 'server-only'
import clsx from 'clsx'
import redac from 'redac'
import mdx from 'redac/plugins/mdx'
import yaml from 'redac/plugins/yaml'

export async function generateMetadata() {
  return {
    title: 'TDP news and events',
    description: 'Latest news on TDP and list of past and future events.',
  }
}

export async function generateStaticParams() {
  return [{
    lang: 'en'
  }]
}

export default async function Page({ params }) {
  const i18n = await redac([
    {
      plugin: yaml,
      config: './content/i18ns',
    },
  ])
    .from('i18ns')
    .match(params.lang, [])
    .map((params) => params.data)
    .get()
  const broadcasts = await redac([
    {
      plugin: yaml,
      config: './content/broadcasts',
    },
  ])
    .from('broadcasts')
    .map((broadcast) => ({
      ...broadcast,
      lang: broadcast.lang || 'en',
    }))
    .filter((broadcast) => broadcast.lang === params.lang)
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>{i18n.broadcasts.title}</h1>
      <ul className="grid gap-3 mb-5 not-prose">
        {broadcasts.reverse().map((broadcast) => (
          <li
            key={broadcast.slug.join('/')}
            className={clsx(
              'py-2 px-3',
              'text-white/70 hover:text-white/100 font-extralight',
              'rounded-sm border border-white/40 hover:border-white/80'
            )}
            style={{
              background:
                'radial-gradient(50% 50% at 50% 50%, rgba(37, 42, 40, 0.8) 0%, rgba(31, 38, 43, 0.8) 100%)',
            }}
          >
            <p>{broadcast.data.message}</p>
            <small>{broadcast.data.when}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}
