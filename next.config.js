/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

module.exports = withNextra(nextConfig)
