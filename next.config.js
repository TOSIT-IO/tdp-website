

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
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

export default nextConfig
