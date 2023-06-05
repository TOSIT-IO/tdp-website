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
      config: './content/pages',
    },
  ])
    .from('pages')
    .filter(
      (page) =>
        page.lang === params.lang &&
        JSON.stringify(page.slug) === JSON.stringify(params.slug)
    )
    .map(async (page) => ({
      title: page.data.title,
      description: page.data.description,
    }))
    .get()
}

export async function generateStaticParams({ params }) {
  const pages = await redac([
    {
      module: mdx,
      config: './content/pages',
    },
  ])
    .from('pages')
    .filter((page) => page.data.section !== true)
    .filter((page) =>
      page.slug[0] === 'dev' ? process.env.NODE_ENV === 'development' : true
    )
    .map((page) => ({
      lang: page.lang || 'en',
      slug: page.slug,
    }))
  return pages
}

export default async function Page({ params }) {
  const page = await redac([
    {
      module: mdx,
      config: './content/pages',
    },
  ])
    .from('pages')
    .map(page => ({
      ...page,
      lang: page.lang || 'en'
    }))
    .filter(
      (page) =>
        page.lang === params.lang &&
        JSON.stringify(page.slug) === JSON.stringify(params.slug)
    )
    .get()
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>{page.data.title}</h1>
      <MDXRemote
        source={page.content_md}
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
