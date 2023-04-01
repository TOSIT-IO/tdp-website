import {beforeEach, afterEach, describe, it} from 'node:test'
import fs from 'node:fs/promises'
import os from 'node:os'
import 'should'
import mklayout from '../engine/utils/mklayout.js'
import {enrich, source} from '../engine/index.js'

describe('engine.enrich', async () => {
  let tmpdir
  let count = 0
  beforeEach(async () => {
    tmpdir = `${os.tmpdir()}/tdp-test-enrich-${count++}`
    try{ await fs.rm(tmpdir, { recursive: true }) } catch {}
    await fs.mkdir(`${tmpdir}`)
  })
  afterEach(() => {
    fs.rm(tmpdir, { recursive: true })
  })

  it('extract collections', async () => {
    await mklayout(tmpdir, [
      ['./blog/article_1.md', '# Some content'],
      ['./blog/article_2.md', '# Some content'],
      ['./pages/page_1.mdx', '# Some content'],
    ])
    enrich(
      await source(tmpdir)
    ).should.match([
      { collection: "blog" },
      { collection: "blog" },
      { collection: "pages" },
    ])
  })

  it('extract slug', async () => {
    await mklayout(tmpdir, [
      ['./blog/article_1.md', '# Some content'],
      ['./blog/path/to/article_2/index.fr.mdx', '# Some content'],
      ['./blog/path/to/01.article_3/index.fr.mdx', '# Some content'],
      ['./blog/path/to/article_4.fr.mdx', '# Some content'],
      ['./blog/path/to/02.article_5.fr.mdx', '# Some content'],
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

  it('extract lang', async () => {
    await mklayout(tmpdir, [
      ['./blog/article_1.md', '# Some content'],
      ['./blog/path/to/article_2/index.fr.mdx', '# Some content'],
      ['./blog/path/to/01.article_3/index.fr.mdx', '# Some content'],
      ['./blog/path/to/article_4.fr.mdx', '# Some content'],
      ['./blog/path/to/02.article_5.fr.mdx', '# Some content'],
    ])
    enrich(
      await source(tmpdir)
    ).should.match([
      { lang: "fr" },
      { lang: "fr" },
      { lang: "en" },
      { lang: "fr" },
      { lang: "fr" },
    ])
  })

})
