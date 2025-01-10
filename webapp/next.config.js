const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  transpilePackages: ['@solana/web3.js', '@solana/rpc'],

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
      }
    }

    // Ignore punycode warning
    config.ignoreWarnings = [{ module: /node_modules\/punycode/ }]

    return config
  },
}

module.exports = nextConfig
