import 'server-only'
import redac from 'redac'
import mdx from 'redac/plugins/mdx'
import { MDXRemote } from 'next-mdx-remote-client/rsc'
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

export async function generateMetadata(props) {
  const params = await props.params
  return await redac([
    {
      plugin: mdx,
      config: './content/pages',
    },
  ])
    .from('pages')
    .filter(
      (page) =>
        page.lang === params.lang &&
        JSON.stringify(page.slug) === JSON.stringify(params.slug),
    )
    .map(async (page) => ({
      title: page.data.title,
      description: page.data.description,
    }))
    .get()
}

export async function generateStaticParams() {
  return (
    redac([
      {
        plugin: mdx,
        config: './content/pages',
      },
    ])
      .from('pages')
      // Section are not page, only use in left menu
      .filter((page) => page.data.section !== true)
      // Redirect pages are no translation, only use in header menu
      .filter((page) => !page.data.redirect)
      .filter((page) =>
        page.slug[0] === 'dev' ? process.env.NODE_ENV === 'development' : true,
      )
      .filter((page) => page.data.jsx !== true)
      .map((page) => ({
        lang: page.lang || 'en',
        slug: page.slug,
      }))
  )
}

export default async function Page(props) {
  const params = await props.params
  const page = await redac([
    {
      plugin: mdx,
      config: './content/pages',
    },
  ])
    .from('pages')
    .map((page) => ({
      ...page,
      lang: page.lang || 'en',
    }))
    .filter(
      (page) =>
        page.lang === params.lang &&
        JSON.stringify(page.slug) === JSON.stringify(params.slug),
    )
    .get()
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>{page.data.title}</h1>
      <MDXRemote
        source={page.value}
        components={components}
        options={{
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: remark,
            rehypePlugins: rehype,
            recmaPlugins: recma,
            format: 'mdx',
          },
        }}
      />
    </div>
  )
}
