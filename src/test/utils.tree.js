import { describe, it } from 'node:test'
import 'should'
import tree from '../engine/utils/tree.js'

describe('functions', async () => {
  it('preserve properties', async () => {
    const pages = [
      { slug: ['a'], title: 'a' },
      { slug: ['b'], title: 'b' },
      { slug: ['b', 'c'], title: 'c' },
    ]
    tree(pages).should.match([
      { title: 'a', slug: ['a'], children: [] },
      {
        title: 'b',
        slug: ['b'],
        children: [
          {
            title: 'c',
            slug: ['b', 'c'],
            children: [],
          },
        ],
      },
    ])
  })
  it('with multiple parent directories', async () => {
    const pages = [
      { slug: ['a'] },
      { slug: ['b'] },
      { slug: ['b', 'a'] },
      { slug: ['b', 'b'] },
      { slug: ['a', 'a'] },
      { slug: ['a', 'b'] },
    ]
    tree(pages).should.match([
      {
        slug: ['a'],
        children: [
          {
            slug: ['a', 'a'],
            children: [],
          },
          {
            slug: ['a', 'b'],
            children: [],
          },
        ],
      },
      {
        slug: ['b'],
        children: [
          {
            slug: ['b', 'a'],
            children: [],
          },
          {
            slug: ['b', 'b'],
            children: [],
          },
        ],
      },
    ])
  })
})
