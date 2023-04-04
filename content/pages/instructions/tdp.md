
# Documentation

Content is located inside the `./content` folder and it is organized by collections.

Available collections include:

- pages   
  The documentation pages of the website.
- post
  Blog articles and announcements.

The documents inside a collection are written in MDX, a Mardown derivative. Filename ends with either the `.md` or the `.mdx` extension. A document slug is extracted from parent directories preceding the collection directory as well as from the document name unless it matches the `index[.{lang}].md[x]` expression.

For example, `./content/pages/parent/child/page.en.md` is equivalent to `./content/pages/parent/child/page/index.en.md` and yields to:

```json
{
  ...
  "collection": "pages",
  "lang": "en",
  "slug": ["parent", "child"],
  "store": "content",
  ...
}
```

## Document properties

Common properties:

- `collection` (string)   
  Collection storing the document
- `lang` (string, `en`)   
  Document language, default to english.
- `slug` (array)   
- `data` (object)   
  Various metadata extracted from the frontmatter as well as the title obtained from Markdown.
- `toc` (array)   
  Table of content, starting with headings 2 and stopting with headings 3.

Advanced or internal properties:

- `type`:   
  Internal usage, the document type of the collection
- `content_raw`   
  Original content on the file system
- `content_md`   
  Content after markdown parsing
- `path_absolute`   
  Absolute file path
- `path_relative`   
  File path relative to the store
- `sort`   
  Key used for sorting, discoved by default from the file name and parent dirname
- `store`   
  Name of the store, discovered by default from the dirname of the cwd option.