import { beforeEach, afterEach, describe, it } from 'node:test'
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
    try {
      await fs.rm(tmpdir, { recursive: true })
    } catch {}
    await fs.mkdir(`${tmpdir}`)
  })
  afterEach(() => {
    fs.rm(tmpdir, { recursive: true })
  })

  it('from root', async () => {
    await mklayout(tmpdir, [
      ['./pages/root.md'],
      ['./pages/root/parent_1.md'],
      ['./pages/root/parent_1/child_1.md'],
      ['./pages/root/parent_1/child_2.md'],
      ['./pages/root/parent_2.md'],
      ['./pages/root/parent_2/child_1.md'],
    ])
    const documents = await engine(tmpdir)
      .from('pages')
      .map((document) => ({
        slug: document.slug
      }))
      .tree()
    documents.should.eql([
      {
        slug: ['root'],
        children: [
          {
            slug: ['root', 'parent_1'],
            children: [
              {
                slug: ['root', 'parent_1', 'child_1'],
                children: [],
              },
              {
                slug: ['root', 'parent_1', 'child_2'],
                children: [],
              },
            ],
          },
          {
            slug: ['root', 'parent_2'],
            children: [
              {
                slug: ['root', 'parent_2', 'child_1'],
                children: [],
              },
            ],
          },
        ],
      },
    ])
  })

  it('combined with get', async () => {
    await mklayout(tmpdir, [
      ['./pages/parent_1.md'],
      ['./pages/parent_1/child_1.md'],
      ['./pages/parent_1/child_2.md'],
    ])
    const document = await engine(tmpdir)
      .from('pages')
      .map((document) => ({
        slug: document.slug,
      }))
      .tree()
      .get()
    document.should.eql({
      slug: ['parent_1'],
      children: [
        {
          slug: ['parent_1', 'child_1'],
          children: [],
        },
        {
          slug: ['parent_1', 'child_2'],
          children: [],
        },
      ],
    })
  })
})
