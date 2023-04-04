import { mdxAnnotations } from 'mdx-annotations'
// import recmaNextjsStaticProps from 'recma-nextjs-static-props'

// function recmaRemoveNamedExports() {
//   return (tree) => {
//     tree.body = tree.body.map((node) => {
//       if (node.type === 'ExportNamedDeclaration') {
//         return node.declaration
//       }
//       return node
//     })
//   }
// }

const plugins = [
  mdxAnnotations.recma,
  // recmaRemoveNamedExports,
  // recmaNextjsStaticProps,
]

export default plugins
