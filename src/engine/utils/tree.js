import { merge, mutate } from 'mixme'

const getIndexInTree = (tree, el) => {
  // return tree.find( doc => JSON.stringify(doc.slug) === JSON.stringify(document.slug))
  for(let i = 0; i < tree.length; i++){
    const doc = tree[i]
    if(doc.slug[doc.slug.length-1] === el) return i
  }
}

export default function tree (documents) {
  let tree = [];
  let root = undefined
  documents = documents
  // Find comment root
  .map((document) => {
    if(root === undefined){
      // root = document.slug
      root = document.slug.slice(0, document.slug.length-1)
    }
    for(const i in root){
      if(root[i] !== document.slug[i]){
        root = root.slice(0, i)
      }
    }
    return document
  })
  // Strip slug from root
  .map((document) => {
    return {...document, slug_relative: document.slug.slice(root.length, document.slug.length)}
  })
  // Build the tree
  .map((document) => {
    let ltree = tree
    for(let i=0; i<document.slug_relative.length; i++){
      let treeIndex = getIndexInTree(ltree, document.slug_relative[i])
      // Document not yet inside the tree
      if (treeIndex === undefined){
        treeIndex = ltree.length
        ltree.push({
          children: [],
          slug: [...root, ...document.slug_relative.slice(0, i + 1)],
          slug_relative: document.slug_relative.slice(0, i + 1)
        })
      }
      // Default value
      // ltree[treeIndex] = mutate(ltree[treeIndex], {
      //   children: [],
      //   slug: [...root, ...document.slug_relative.slice(0, i + 1)],
      //   slug_relative: document.slug_relative.slice(0, i + 1)
      // })
      // Document
      if(i == document.slug_relative.length - 1){
        // ltree[treeIndex] = mutate(ltree[treeIndex], document)
        mutate(ltree[treeIndex], document)
      } else { // Parent
        ltree = ltree[treeIndex].children
      }
    }
  })
  return tree
}

// export default function tree (pages) {
//   let tree = []
//   const pagesClone = clone(pages)
//   const sorted = pagesClone.sort(function (a, b) {
//     return a.slug.length - b.slug.length
//   })
//   sorted.map((page) => {
//     let slug = page.slug.filter((el) => el.length)
//     let localtree = tree
//     slug.map((name, i) => {
//       if (i === slug.length - 1) {
//         // Insert the page
//         localtree.push({
//           ...page,
//           children: [],
//         })
//       } else {
//         // Navigate the hierarchy
//         let parent = localtree.find((p) => {
//           return p.slug.at(-1) === name
//         })
//         if (parent) {
//           if (!parent.children) {
//             parent.children = []
//             parent.children.push({
//               ...page,
//               children: [],
//             })
//           }
//         } else {
//           parent = {
//             ...page,
//             children: [],
//           }
//           localtree.push(parent)
//         }
//         localtree = parent.children
//       }
//     })
//   })
//   return tree
// }
