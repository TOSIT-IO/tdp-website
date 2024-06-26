import 'server-only'
import redac from 'redac'
import mdx from 'redac/plugins/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import components from '@/mdx/components/index.js'
import rehype from '/src/mdx/rehype.js'
import remark from '/src/mdx/remark.js'
import recma from '/src/mdx/recma.js'

// With Next@13.4.16, unregistered static params are not honored as 404 pages
// and are treated as dynamic pages. Setting `dynamicParams` to `false` enforce
// the values returned by `generateStaticParams`.
// Leaving that settings with Next@13.5.3 generates the error:
// Error: Page "/[lang]/(home)/page" is missing exported function "generateStaticParams()", which is required with "output: export" config.
// export const dynamicParams = false

export async function generateMetadata({ params }) {
  return await redac([
    {
      plugin: mdx,
      config: './content/reports',
    },
  ])
    .from('reports')
    .filter(
      (report) =>
      report.lang === params.lang &&
        JSON.stringify(report.slug) === JSON.stringify(params.slug)
    )
    .map(async (report) => ({
      title: report.data.title,
      description: report.data.description,
    }))
    .get()
}

export async function generateStaticParams({ params }) {
  const reports = await redac([
    {
      plugin: mdx,
      config: './content/reports',
    },
  ])
    .from('reports')
    .filter(
      (report) => report.slug[0] === 'dev' ? process.env.NODE_ENV === 'development' : true
    )
    .map((report) => ({
      lang: report.lang || 'en',
      slug: report.slug,
    }))
  return reports
}

export default async function Page({ params }) {
  const report = await redac([
    {
      plugin: mdx,
      config: './content/reports',
    },
  ])
    .from('reports')
    .map(report => ({
      ...report,
      lang: report.lang || 'en'
    }))
    .filter(
      (report) =>
      report.lang === params.lang &&
        JSON.stringify(report.slug) === JSON.stringify(params.slug)
    )
    .get()
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>{report.data.title}</h1>
      <MDXRemote
        source={report.content_raw}
        components={components}
        options={{
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: remark,
            rehypePlugins: rehype,
            recmaPlugins: recma,
            format: 'mdx',
          }
        }}
      />
    </div>
  )
}
