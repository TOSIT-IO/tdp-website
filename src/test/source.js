import {beforeEach, afterEach, describe, it} from 'node:test'
import fs from 'node:fs/promises'
import os from 'node:os'
import 'should'
import mklayout from '../engine/utils/mklayout.js'
import {source} from '../engine/index.js'

describe('engine.source', async () => {
  let tmpdir
  let count = 0
  beforeEach(async () => {
    tmpdir = `${os.tmpdir()}/tdp-test-source-${count++}`
    try{ await fs.rm(tmpdir, { recursive: true }) } catch {}
    await fs.mkdir(`${tmpdir}`)
  })
  afterEach(() => {
    // fs.rm(tmpdir, { recursive: true })
  })

  it('filter .md and .mdx extension', async () => {
    await mklayout(tmpdir, [
      ['./blog/article_1.md', '# Some content'],
      ['./blog/article_2.mdx', '# Some content'],
      ['./blog/article_3.ko', '# Some content'],
    ])
    // console.log('source', source)
    await source(tmpdir).should.be.finally.match([
      { path_relative: 'blog/article_1.md' },
      { path_relative: 'blog/article_2.mdx' },
    ])
  })

  it('accept multiple stores as string and object', async () => {
    await mklayout(tmpdir, [
      ['./store_1/blog/article_1.md', '# Some content'],
      ['./store_2/blog/article_2.md', '# Some content'],
    ])
    await source([
      `${tmpdir}/store_1`,
      { cwd: `${tmpdir}/store_2` },
    ]).should.be.finally.match([
      { path_relative: 'blog/article_1.md' },
      { path_relative: 'blog/article_2.md' },
    ])
  })

  it('entries are filled with properties', async () => {
    await mklayout(tmpdir, [
      ['./my_store/blog/article.md', '# Some content'],
    ])
    await source({
      cwd: `${tmpdir}/my_store`,
    }).should.be.finally.match([
      {
        content_raw: (c) => Buffer.isBuffer(c),
        path_absolute: `${tmpdir}/my_store/blog/article.md`,
        path_relative: 'blog/article.md',
        store: 'my_store',
      },
    ])
  })

})
