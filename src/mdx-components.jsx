
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

import components from './mdx/components.js'

// This file is required to use MDX in `app` directory.
export function useMDXComponents(cpnts) {
  console.log('components', components)
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    // ...cpnts,
    ...components,
  }
}
