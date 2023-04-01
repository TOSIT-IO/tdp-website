import { visit } from 'unist-util-visit'
import { mkname } from '../utils/sluger.js'

export default function remarkToc({depth_min=1, depth_max=3} = {}) {
  return function (tree, vfile) {
    const toc = []
    if (vfile.data.toc === false) return
    visit(tree, 'heading', function (node) {
      if (node.depth < depth_min || node.depth > depth_max) return
      toc.push({
        title: node.children[0].value,
        depth: node.depth,
        anchor: mkname(node.children[0].value),
      })
    })
    vfile.data.toc = toc
  }
}
