// @ts-check

/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  swcMinify: true,
  images: { unoptimized: true },

  // Specify page extensions and directory
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  distDir: 'dist',

  transpilePackages: ['@solana/web3.js', '@solana/rpc'],

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

    // Add support for importing .json files
    config.module.rules.push({
      test: /\.json$/,
      type: 'javascript/auto',
      use: ['json-loader'],
    })

    return config
  },
}

module.exports = nextConfig
