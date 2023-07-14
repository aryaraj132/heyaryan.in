/** @type {import('next').NextConfig} */

module.exports = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx", "html"],
  reactStrictMode: true,
  trailingSlash: false,
  compiler: {
    removeConsole: true,
  },
};

// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
