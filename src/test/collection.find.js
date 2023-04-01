import {beforeEach, afterEach, describe, it} from 'node:test'
import fs from 'node:fs/promises'
import os from 'node:os'
import 'should'
import mklayout from '../engine/utils/mklayout.js'
import engine from '../engine/index.js'

describe('engine.collection.find', async () => {
  let tmpdir
  let count = 0
  beforeEach(async () => {
    tmpdir = `${os.tmpdir()}/tdp-test-collection-${count++}`
    try{ await fs.rm(tmpdir, { recursive: true }) } catch {}
    await fs.mkdir(`${tmpdir}`)
  })
  afterEach(() => {
    fs.rm(tmpdir, { recursive: true })
  })
  it('find all documents, no filter', async () => {
    await mklayout(tmpdir, [
      ['./blog/article_1.md', '# Some content'],
      ['./blog/article_2.md', '# Some content'],
      ['./pages/page_1.mdx', '# Some content'],
    ])
    ;(
      await engine(tmpdir).from('blog').find()
    ).should.match([
      {
        collection: 'blog',
        slug: ['article_1'],
      },
      {
        collection: 'blog',
        slug: ['article_2'],
      },
    ])
  })
  it('with `.filter`', async () => {
    await mklayout(tmpdir, [
      ['./blog/article_1.fr.md', '# Some content'],
      ['./blog/article_1.en.md', '# Some content'],
      ['./blog/article_1.de.md', '# Some content'],
      ['./blog/article_2.fr.md', '# Some content'],
      ['./blog/article_2.en.md', '# Some content'],
    ])
    ;(
      await engine(tmpdir)
        .from('blog')
        .find()
        .filter((document) => (['fr', 'de'].includes(document.lang)))
    ).should.match([
      {
        lang: 'de',
        slug: ['article_1'],
      },
      {
        lang: 'fr',
        slug: ['article_1'],
      },
      {
        lang: 'fr',
        slug: ['article_2'],
      },
    ])
  })
})
