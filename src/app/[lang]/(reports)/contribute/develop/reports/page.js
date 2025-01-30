import 'server-only'
import clsx from 'clsx'
import Link from 'next/link'
// Content
import redac from 'redac'
import redacMemory from 'redac/plugins/memory'
import redacReports from '/.redac/reports.mjs'

export async function generateMetadata() {
  return {
    title: 'TDP contributors meetings',
    description:
      'List of all TDP contributors meeting notes scheduled every Friday.',
  }
}

export async function generateStaticParams() {
  return [
    {
      lang: 'en',
    },
  ]
}

export default async function Page({ params }) {
  const reports = await redac([
    {
      plugin: redacMemory,
      config: redacReports,
    },
  ])
    .from('reports')
    .map((report) => ({
      slug: report.slug,
      title: report.data.title,
      lang: report.lang || 'en',
    }))
    .filter((report) => report.lang === params.lang)
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>TDP contributors meetings</h1>
      <ul className="grid gap-3 mb-5 not-prose">
        {reports.reverse().map((report) => (
          <li
            key={report.slug.join('/')}
            className={clsx(
              'py-2 px-3',
              'text-white/70 hover:text-white/100 font-extralight',
              'rounded border border-white/40 hover:border-white/80',
            )}
            style={{
              background:
                'radial-gradient(50% 50% at 50% 50%, rgba(37, 42, 40, 0.8) 0%, rgba(31, 38, 43, 0.8) 100%)',
            }}
          >
            <Link
              href={`/${
                params.lang
              }/contribute/develop/reports/${report.slug.join('/')}`}
            >
              {report.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
