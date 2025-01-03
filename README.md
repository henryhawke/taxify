# Taxfy Solana Mobile Stack

![TaxfyMobile Stack](https://storage.googleapis.com/taxfy-assets/animation/TaxfySolanaMobileStack.gif)

## Taxfy Mobile Stack (Expo) + Web (Next.js) - Firestore Template

Solana Mobile Stack: https://docs.solanamobile.com/

## Tech Stack

### Core

- [Firebase - Serverless Platform](https://firebase.google.com/)
- [Google Cloud - Cloud Platform](https://cloud.google.com/)
- [Jest - Testing framework](https://jestjs.io/)
- [TypeScript - Type Check](https://www.typescriptlang.org/)
- [ESLint - Linter](https://eslint.org/)
- [Prettier - Formatter](https://prettier.io/)

### Mobile

- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/)
- [EAS Build](https://docs.expo.dev/build/introduction/)
- [Solana Mobile Wallet Adapter](https://docs.solanamobile.com/react-native/overview)

### Web (@Codebase @Web)

- [Next.js - SSG Framework](https://nextjs.org/)
- [React - UI Framework](https://reactjs.org/)
- [Tailwind - CSS Framework](https://tailwindcss.com/)
- [Solana Web3.js v2](https://github.com/solana-labs/solana-web3.js)
- [Solana Wallet Adapter (Web)](https://github.com/solana-labs/wallet-adapter)

### Shared

- [Recoil - State Management](https://recoiljs.org/)
- [React i18n - Localization](https://react.i18next.com/)
- [Solana - The fastest L1 Blockchain](https://solana.com/)
- [umi - Solana Token Management](https://github.com/metaplex-foundation/umi)
- [Bubblegum - Solana Compressed NFTs (cNFTs)](https://developers.metaplex.com/bubblegum)
- [SIWS - Sign In With Solana](https://github.com/phantom/sign-in-with-solana)

## Web Features

### Architecture

- Static Site Generation (SSG) for optimal performance
- Modular service architecture
- Real-time data processing
- Hybrid database support (SQL + NoSQL)
- Serverless deployment

### Solana Integration

- Web3.js v2 with optimized bundling
- Multi-wallet support
- Real-time transaction monitoring
- NFT transaction tracking
- DeFi protocol integration

### Tax Processing

- Automated transaction classification
- Cost basis calculation
- Tax lot tracking
- Wash sale detection
- Multi-jurisdiction support

### Form Generation

- IRS Form 8949 automation
- Schedule D generation
- Supporting documentation
- Audit trail creation

### AI Features

- Transaction pattern recognition
- Tax optimization suggestions
- Risk assessment
- Compliance validation

### Performance

- Optimized Solana package bundling
- Efficient chunk splitting
- Modern JavaScript features
- CSS optimization
- Font loading optimization

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
NEXT_TELEMETRY_DISABLED=1 pnpm build

# Run tests
pnpm test
```

## CI/CD

### GitHub Actions Workflows

```yaml:github/workflows/webapp.yml
name: Web Build & Deploy
on:
  push:
    branches: [main]
    paths:
      - 'webapp/**'
      - '.github/workflows/**'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install

      - name: Build webapp
        run: pnpm build

      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseToken: '${{ secrets.FIREBASE_TOKEN }}'
          projectId: taxifyio
          channelId: live
```

### Build Configuration

```javascript:webapp/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  swcMinify: true,
  images: { unoptimized: true },

  webpack: (config) => {
    // Solana package optimizations
    config.resolve.alias = {
      '@solana/web3.js': path.resolve('node_modules/@solana/web3.js'),
      '@solana/rpc': path.resolve('node_modules/@solana/rpc')
    }

    // Production optimizations
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          solana: {
            test: /[\\/]node_modules[\\/]@solana[\\/]/,
            name: 'solana',
            chunks: 'all',
            priority: 10
          }
        }
      }
    }

    return config
  }
}
```

### Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
NEXT_TELEMETRY_DISABLED=1 pnpm build

# Run tests
pnpm test
```

### Firebase Deployment

```json:firebase.json
{
  "hosting": {
    "target": "taxifyio",
    "public": "webapp/dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{"source": "**", "destination": "/index.html"}],
    "predeploy": ["pnpm build"]
  }
}
```

## What's Taxfy?

TypeScript Serverless Framework 'Taxfy'.

The Taxfy project was launched with the goal of reducing software development, operation, and maintenance costs.

Build Serverless Apps faster.
