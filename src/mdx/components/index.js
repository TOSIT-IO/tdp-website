// export { Code as code, Pre as pre } from '@/mdx/components/Code'
// export { Properties, Property } from '@/mdx/components/Properties'
// export { Tabs } from '@/mdx/components/Tabs'
import { Code, Pre } from '@/mdx/components/Code'
import { Properties, Property } from '@/mdx/components/Properties'
import { Tabs } from '@/mdx/components/Tabs'
import stacks from './stacks/data'
import Stack from './stacks/stack'

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
const components = {
  h1: h1,
  code: (props) => <Code {...props} />,
  pre: (props) => <Pre {...props} />,
  Properties: (props) => <Properties {...props} />,
  Property: (props) => <Property {...props} />,
  Stack11: () => <Stack stack={stacks['tdp-1.1']} />,
  Stack20: () => <Stack stack={stacks['tdp-2.0']} />,
  Tabs: (props) => <Tabs {...props} />,
  TODO: (props) => (
    <p
      className="bg-amber-200 text-amber-800 border-amber-800 border rounded-md p-1"
      {...props}
    >
      <span className="font-bold">TODO</span> {props.children}
    </p>
  ),
  a: (props) => {
    if (props.href && props.href !== '#') {
      // href is defined
      return <a {...props} />
    } else {
      // href is not defined
      return (
        <a
          className="underline text-amber-200 decoration-amber-200 decoration-4 hover:decoration-amber-100 hover:text-amber-100"
          title="Missing link"
          {...props}
        />
      )
    }
  },
}
export default components
