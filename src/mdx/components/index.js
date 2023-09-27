// export { CodeGroup } from '@/mdx/components/Code'
export { Code as code, Pre as pre } from '@/mdx/components/Code'
export { Tabs } from '@/mdx/components/Tabs'
export { Properties, Property } from '@/mdx/components/Properties'

const h1 = () => (
  <div>
    WARNING: heading 1 are handled by the template, only one is accepted at
    the begining of a page.
  </div>
)

export { h1 }
