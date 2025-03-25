import mdx from '@next/mdx'
import remark from './src/mdx/remark.js'
import rehype from './src/mdx/rehype.js'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
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

export default withMDX(nextConfig)
