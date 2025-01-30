import 'server-only'
import { MDXRemote } from 'next-mdx-remote/rsc'
import components from '@/mdx/components/index.js'
import rehype from '/src/mdx/rehype.js'
import remark from '/src/mdx/remark.js'
import recma from '/src/mdx/recma.js'
// Content
import redac from 'redac'
import redacMemory from 'redac/plugins/memory'
import redacPages from '/.redac/pages.mjs'

// With Next@13.4.16, unregistered static params are not honored as 404 pages
// and are treated as dynamic pages. Setting `dynamicParams` to `false` enforce
// the values returned by `generateStaticParams`.
// Leaving that settings with Next@13.5.3 generates the error:
// Error: Page "/[lang]/(home)/page" is missing exported function "generateStaticParams()", which is required with "output: export" config.
// export const dynamicParams = false

export async function generateMetadata({ params }) {
  return await redac([
    {
      plugin: redacMemory,
      config: redacPages,
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
        plugin: redacMemory,
        config: redacPages,
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

export default async function Page({ params }) {
  const page = await redac([
    {
      plugin: redacMemory,
      config: redacPages,
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
