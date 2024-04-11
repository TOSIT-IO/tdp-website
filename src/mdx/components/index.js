// export { Code as code, Pre as pre } from '@/mdx/components/Code'
// export { Properties, Property } from '@/mdx/components/Properties'
// export { Tabs } from '@/mdx/components/Tabs'
import { Code, Pre } from '@/mdx/components/Code'
import { Properties, Property } from '@/mdx/components/Properties'
import { Tabs } from '@/mdx/components/Tabs'
import { StackTables, stack31 } from './stacks'

const h1 = () => (
  <div>
    WARNING: heading 1 are handled by the template, only one is accepted at the
    begining of a page.
  </div>
)
// export { h1 }

// Fix error `Error: Cannot access Code.propTypes on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.`
// Introduced with Next.js version 13.5.6, was fine with version 13.4.16
// See https://github.com/hashicorp/next-mdx-remote/issues/405
export default {
  h1: h1,
  code: (props) => <Code {...props} />,
  pre: (props) => <Pre {...props} />,
  Properties: (props) => <Properties {...props} />,
  Property: (props) => <Property {...props} />,
  Stack31: () => <StackTables stack={stack31} />,
  Tabs: (props) => <Tabs {...props} />,
}
