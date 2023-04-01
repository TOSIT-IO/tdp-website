import {beforeEach, afterEach, describe, it} from 'node:test'
import fs from 'node:fs/promises'
import os from 'node:os'
import 'should'
import mklayout from '../engine/utils/mklayout.js'
import engine from '../engine/index.js'

describe('engine.collection.tree', async () => {
  let tmpdir
  let count = 0
  beforeEach(async () => {
    tmpdir = `${os.tmpdir()}/tdp-test-collection-tree-${count++}`
    try{ await fs.rm(tmpdir, { recursive: true }) } catch {}
    await fs.mkdir(`${tmpdir}`)
  })
  afterEach(() => {
    fs.rm(tmpdir, { recursive: true })
  })
  it('no argument', async () => {
    await mklayout(tmpdir, [
      ['./pages/root.md', '# 0'],
      ['./pages/root/parent_1.md', '# 0.1'],
      ['./pages/root/parent_1/child_1.md', '# 0.1.1'],
      ['./pages/root/parent_1/child_2.md', '# 0.1.2'],
      ['./pages/root/parent_2.md', '# 0.2'],
      ['./pages/root/parent_2/child_1.md', '# 0.2.1'],
    ])
    const pages = await engine(tmpdir)
      .from('pages')
      .map((document) => ({
        slug: document.slug,
        data: {
          title: document.data.title
        }
      }))
      .tree()
    pages.should.eql([{
      slug: ['root'],
      data: {title: '0'},
      children: [{
        slug: ['root', 'parent_1'],
        data: {title: '0.1'},
        children: [{
          slug: ['root', 'parent_1', 'child_1'],
          data: {title: '0.1.1'},
          children: []
        },{
          slug: ['root', 'parent_1', 'child_2'],
          data: {title: '0.1.2'},
          children: []
        }]
      },{
        slug: ['root', 'parent_2'],
        data: {title: '0.2'},
        children: [{
          slug: ['root', 'parent_2', 'child_1'],
          data: {title: '0.2.1'},
          children: []
        }]
      }]
    }])
  })
})
