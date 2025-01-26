import mdx from '@next/mdx'
import remark from './src/mdx/remark.js'
import rehype from './src/mdx/rehype.js'
import redac from 'redac/next'
import redacMdx from 'redac/plugins/mdx'

const nextConfig = {
  // Static Exports
  // See https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  output: 'export',
  // distDir: 'dist',
  // Disable the 'x-powered-by' header
  // https://nextjs.org/docs/api-reference/next.config.js/disabling-x-powered-by
  poweredByHeader: false,
  // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  // React's Strict Mode is a development mode only feature for highlighting
  // potential problems in an application. It helps to identify unsafe
  // lifecycles, legacy API usage, and a number of other features.
  // Found in tailwindui template syntax project
  reactStrictMode: true,
  // https://nextjs.org/docs/advanced-features/compiler#minification
  // Opt-in to using the Next.js compiler for minification. This is 7x faster than Terser.
  // https://nextjs.org/docs/advanced-features/compiler
  // Used by Tailwind
  // https://github.com/tailwindlabs/tailwindcss.com/blob/0bc153eee67b7236e04c392f4bcbab9e36ad9a99/next.config.js#L39
  swcMinify: true,
  // Handle SVG files
  // Issue after upgrading from 13.2.4
  // Removed issuer, see https://github.com/vercel/next.js/issues/48177
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      // issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            dimensions: false,
            replaceAttrValues: {},
          },
        },
      ],
    })
    return config
  },
}

const withMDX = mdx({
  extension: /\.(md|mdx)$/,
  experimental: {
    // Rust based MDX compiler
    // https://nextjs.org/docs/advanced-features/using-mdx#using-rust-based-mdx-compiler-experimental
    // mdxRs: true,
  },
  options: {
    remarkPlugins: remark,
    rehypePlugins: rehype,
    // Custom Elements
    // https://nextjs.org/docs/advanced-features/using-mdx#custom-elements
    // If you use `MDXProvider`, uncomment the following line.
    // Use this to create your own custom components that map to HTML elements
    // providerImportSource: "@mdx-js/react",
  },
})

const withRedac = redac([
  {
    plugin: redacMdx,
    config: {
      cache: '.redac/pages.mjs',
      target: './content/pages',
    },
  },
])

export default withRedac(withMDX(nextConfig))
