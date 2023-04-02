import 'server-only'
// import dynamic from 'next/dynamic'
import { MDXRemote } from 'next-mdx-remote/rsc'
import * as components from '@/mdx/components/index.js'
import engine from '/src/engine/index.js'
import rehype from '/src/mdx/rehype.js'
import remark from '/src/mdx/remark.js'
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

// Parame

export async function generateStaticParams() {
  const pages = await engine('./content')
    .from('pages')
    // .filter((page) => page.lang === 'en' && page.slug[0] === 'docs')
    .map(page => ({
      lang: page.lang,
      slug: page.slug,
    }))
  return pages
}

// const ServerComponent = dynamic(async (...args) => {
//   console.log('!!!!!dynamic', args)
//   // const page = await engine('./content')
//   //   .from('pages')
//   //   .filter((page) => page.lang === 'en' && JSON.stringify(page.slug) === JSON.stringify([ 'docs', 'developers', 'build-release' ]))
//   //   .get()
//   // return import(page.path_absolute)
//   // return import('/Users/david/projects/alliage/tdp-website/content/pages/3.docs/developers/build-release/index.en.md')
//   const source = 'content/pages/3.docs/developers/build-release/index.en.md'
//   return import(source)
// })

export default async function Page({ params }) {
  // console.log(':params:', params)
  const page = await engine('./content')
    .from('pages')
    .filter((page) => page.lang === params.lang && JSON.stringify(page.slug) === JSON.stringify(params.slug))
    .get()
  const test = '/Users/david/projects/alliage/tdp-website/content/pages/3.docs/developers/build-release/index.en.md'
  // const Component = await import(
  //   // page.path_absolute
  //   // '/Users/david/projects/alliage/tdp-website/content/pages/3.docs/developers/build-release/index.en.md'
  //   // '/Users/david/projects/alliage/tdp-website/content/pages/3.docs/developers/build-release/index.en.md'
  //   test
  // )
  console.log(':components:', components.code)
  return (
    <div className="prose prose-invert">
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
            format: 'mdx',
          }
        }}
      />
    </div>
  )
}
