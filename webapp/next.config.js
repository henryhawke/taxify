const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  transpilePackages: [
    '@solana/web3.js',
    '@solana/rpc',
    '@mui/material',
    '@mui/icons-material',
    '@emotion/react',
    '@emotion/styled',
  ],

  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@common': path.resolve(__dirname, '../common'),
    }

    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        crypto: false,
        punycode: false,
      }
    }

    // Ignore punycode warning
    config.ignoreWarnings = [{ module: /node_modules\/punycode/ }]

    return config
  },

  experimental: {
    forceSwcTransforms: false,
  },
  swcMinify: false,
}

module.exports = nextConfig
