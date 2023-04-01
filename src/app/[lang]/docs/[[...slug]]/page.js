
export const dynamicParams = false;

export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json());
  return new Promise((resolve) => {
    resolve([{ lang: 'en', slug: ['page_1'] }, { lang: 'en', slug: ['page_2'] }])
  })
}

export default async function Page({ params }) {
  const Component = await import('/Users/david/projects/alliage/tdp-website/content/posts/2023-01-02-et-vitam-cursus/index.en.mdx')
  console.log('>>>>', Component)
  return (
    <div className="prose prose-invert">
      <h1>My documentation page</h1>
      <Component.default />
    </div>
  )
}
