/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['mdx-bundler'],
  },
}

module.exports = nextConfig
