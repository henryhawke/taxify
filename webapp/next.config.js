/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  swcMinify: true,
  images: { unoptimized: true },

  webpack: (config) => {
    // Solana package optimizations
    config.resolve.alias = {
      '@solana/web3.js': path.resolve('node_modules/@solana/web3.js'),
      '@solana/rpc': path.resolve('node_modules/@solana/rpc'),
    }

    // Production optimizations
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          solana: {
            test: /[\\/]node_modules[\\/]@solana[\\/]/,
            name: 'solana',
            chunks: 'all',
            priority: 10,
          },
        },
      },
    }

    return config
  },
}

module.exports = nextConfig
