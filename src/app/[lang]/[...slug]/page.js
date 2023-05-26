import 'server-only'
// import dynamic from 'next/dynamic'
import { MDXRemote } from 'next-mdx-remote/rsc'
import * as components from '@/mdx/components/index.js'
import engine from '/src/engine/index.js'
import rehype from '/src/mdx/rehype.js'
import remark from '/src/mdx/remark.js'
import recma from '/src/mdx/recma.js'

export const dynamicParams = false

// https://beta.nextjs.org/docs/api-reference/metadata#generatemetadata-function
// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent?: ResolvingMetadata,
// ): Promise<Metadata> {
//   // read route params
//   const id = params.id;

//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json());

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   };
// }

// export default function Page({ params, searchParams }: Props) {}

export async function generateMetadata({ params }) {
  return await engine('./content')
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
  const pages = await engine('./content')
    .from('pages')
    .filter(
      (page) => page.lang === 'en' // && page.slug[0] === 'docs'
    )
    .filter(
      (page) => page.data.section !== true
    )
    .filter(
      (page) => page.slug[0] === 'dev' ? process.env.NODE_ENV === 'development' : true
    )
    .map((page) => ({
      lang: page.lang,
      slug: page.slug,
    }))
  return pages
}

export default async function Page({ params }) {
  const page = await engine('./content')
    .from('pages')
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
          // remarkPlugins: remark,
          // rehypePlugins: rehype,
          // format: 'mdx',
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
