import 'server-only'
import redac from 'redac'
import mdx from 'redac/plugins/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import * as components from '@/mdx/components/index.js'
import rehype from '/src/mdx/rehype.js'
import remark from '/src/mdx/remark.js'
import recma from '/src/mdx/recma.js'

// Control what happens when a dynamic segment is visited that was not generated with generateStaticParams.
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams
// `true`(default): Dynamic segments not included in generateStaticParams are generated on demand.
// `false`: Dynamic segments not included in generateStaticParams will return a 404.
export const dynamicParams = false

export async function generateMetadata({ params }) {
  return await redac([
    {
      module: mdx,
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
      module: mdx,
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
  console.log('>>>', reports)
  return reports
}

export default async function Page({ params }) {
  const report = await redac([
    {
      module: mdx,
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
        source={report.content_md}
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
