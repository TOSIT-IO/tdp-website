import {beforeEach, afterEach, describe, it} from 'node:test'
import fs from 'node:fs/promises'
import os from 'node:os'
import 'should'
import mklayout from '../engine/utils/mklayout.js'
import {enrich, source} from '../engine/index.js'

describe('engine.enrich.slug', async () => {
  let tmpdir
  let count = 0
  beforeEach(async () => {
    tmpdir = `${os.tmpdir()}/tdp-test-enrich-slug-${count++}`
    try{ await fs.rm(tmpdir, { recursive: true }) } catch {}
    await fs.mkdir(`${tmpdir}`)
  })
  afterEach(() => {
    fs.rm(tmpdir, { recursive: true })
  })

  it('extract slug', async () => {
    await mklayout(tmpdir, [
      ['./blog/article_1.md'],
      ['./blog/path/to/article_2/index.fr.mdx'],
      ['./blog/path/to/01.article_3/index.fr.mdx'],
      ['./blog/path/to/article_4.fr.mdx'],
      ['./blog/path/to/02.article_5.fr.mdx'],
    ])
    enrich(
      await source(tmpdir)
    ).should.match([
      { slug: ['path', 'to', 'article_3'] },
      { slug: ['path', 'to', 'article_5'] },
      { slug: ['article_1'] },
      { slug: ['path', 'to', 'article_2'] },
      { slug: ['path', 'to', 'article_4'] },
    ])
  })

  it('with root file', async () => {
    await mklayout(tmpdir, [
      ['./blog/index.md'],
      ['./pages/index.fr.mdx'],
      ['./pages/index.en.mdx'],
    ])
    enrich(
      await source(tmpdir)
    ).should.match([
      { collection: 'blog', lang: 'en', slug: [] },
      { collection: 'pages', lang: 'fr', slug: [] },
      { collection: 'pages', lang: 'en', slug: [] },
    ])
  })

})
