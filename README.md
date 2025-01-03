# Taxfy Solana Mobile Stack

![TaxfyMobile Stack](https://storage.googleapis.com/taxfy-assets/animation/TaxfySolanaMobileStack.gif)

## Taxfy Mobile Stack (Expo) + Web (Next.js) - Firestore Template

Solana Mobile Stack: https://docs.solanamobile.com/

- [Firebase - Serverless Platform](https://firebase.google.com/)
- [Google Cloud - Cloud Platform](https://cloud.google.com/)
- [Jest - Testing framework](https://jestjs.io/)
- [TypeScript - Type Check](https://www.typescriptlang.org/)
- [ESLint - Linter](https://eslint.org/)
- [Prettier - Formatter](https://prettier.io/)
- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/)
- [EAS Build](https://docs.expo.dev/build/introduction/)
- [Recoil - State Management](https://recoiljs.org/)
- [React i18n - Localization](https://react.i18next.com/)
- [twrnc - TailwindCSS](https://github.com/jaredh159/tailwind-react-native-classnames)
- [React Navigation - Routing](https://reactnavigation.org/)
- [Solana - The fastest L1 Blockchain](https://solana.com/)
- [Solana Web3.js - Solana JavaScript API](https://github.com/solana-labs/solana-web3.js)
- [Solana Mobile Wallet Adapter](https://docs.solanamobile.com/react-native/overview)
- [Next.js - SSG Framework](https://nextjs.org/)
- [React - UI Framework](https://reactjs.org/)
- [Tailwind - CSS Framework](https://tailwindcss.com/)
- [Solana Wallet Adapter (Web)](https://github.com/solana-labs/wallet-adapter)
- [umi - Solana Token Management](https://github.com/metaplex-foundation/umi)
- [Bubblegum - Solana Compressed NFTs (cNFTs)](https://developers.metaplex.com/bubblegum)
- [SIWS - Sign In With Solana](https://github.com/phantom/sign-in-with-solana)

## What's Taxfy?

TypeScript Serverless Framework 'Taxfy'.

The Taxfy project was launched with the goal of reducing software development, operation, and maintenance costs.

Build Serverless Apps faster.

## Solana Tax Automation Tool

A comprehensive tax automation solution for Solana blockchain transactions, built on the Taxfy Framework.

### Architecture Overview

1. **Transaction Collection Layer**

   - Real-time transaction monitoring
   - Historical data import
   - Multi-wallet support
   - NFT transaction tracking

2. **Data Processing Layer**

   - Transaction classification
   - Cost basis calculation
   - Tax lot tracking
   - DeFi protocol integration

3. **AI Analysis Layer**

   - Transaction pattern recognition
   - Tax optimization suggestions
   - Compliance validation
   - Risk assessment

4. **Tax Form Generation Layer**
   - IRS Form 8949 generation
   - Schedule D automation
   - Supporting documentation
   - Audit trail creation

### Key Features

- **Transaction Monitoring**

  - Real-time transaction tracking
  - Historical data import
  - Multi-wallet support
  - NFT transaction tracking
  - DeFi protocol integration

- **Classification & Calculation**

  - AI-powered transaction classification
  - Automated cost basis tracking
  - Multiple accounting methods
  - Gain/loss calculations
  - Holding period tracking

- **Tax Form Generation**

  - Form 8949 automation
  - Schedule D generation
  - Supporting documentation
  - Audit trail creation
  - Multi-jurisdiction support

- **AI-Powered Optimization**
  - Tax loss harvesting suggestions
  - Transaction timing optimization
  - Portfolio restructuring advice
  - Risk assessment
  - Compliance validation

## Setup

Solana Mobile Stack - Development Setup: https://docs.solanamobile.com/getting-started/development-setup

## Dependency

- [TypeScript](https://www.typescriptlang.org/)
- [Node](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Google SDK](https://cloud.google.com/sdk/docs)

You might need to install specific java version like here:

```
$ curl -s "https://get.sdkman.io" | bash
$ sdk install java 11.0.20-zulu
$ sdk use java 11.0.20-zulu

$ java --version
openjdk 11.0.20 2023-07-18 LTS
OpenJDK Runtime Environment Zulu11.66+15-CA (build 11.0.20+8-LTS)
OpenJDK 64-Bit Server VM Zulu11.66+15-CA (build 11.0.20+8-LTS, mixed mode)
```

## Usage

※ANDROID_HOME environment is important. Please do not forget to put your ANDROID SDK PATH to eas.json and package.json
(It will be like ~/Library/Android/sdk)

```bash
$ npm i -g firebase-tools
$ npm i -g @skeet-framework/cli
```

```bash
$ taxfy create <project-name>
$ cd <project-name>
$ taxfy s
```

or if you pulled this repo:

```bash
$ taxfy yarn i
$ taxfy s
```

If you setup the Android Emulator, the mobile app will be launched automatically.

Web-Frontend: http://localhost:4200
Firebase Emulator: http://localhost:4000

**※ You need OpenAI API key to use ChatGPT.**

_./functions/taxfy/.env_

```bash
CHAT_GPT_KEY=your-key
CHAT_GPT_ORG=your-org
```

Test your app:

```bash
$ taxfy test
```

## EAS Build

[EAS Build](https://docs.expo.dev/build/introduction/)

You need to run this command to setup EAS Build project.
(Edit app.json for example changing names and deleting "extra" to build new project.)

```
yarn build:configure
```

## Solana Wallet

You can use Solana Wallet Private key converter to get the keyfile.json.
Phantom's Show Private Key gives us the strings which is not compatible with Solana CLI.
So we need to convert it to the Uint8Array and made the script for it.

```
$ yarn solana:key:convert (default: key.json)
// or if you want to name the file.
$ yarn solana:key:convert -- keyfile.json
```

## How to create Compressed NFTs (cNFTs)?

EN: https://medium.com/@KishiTheMechanic/how-to-mint-solana-compressed-nfts-cnfts-with-typescript-be9d0fa7ce30

JA: https://zenn.dev/ki4themecha2q/articles/7dcb9753783a23

## Implementing SIWS (Sign In With Solana)

EN: https://medium.com/@KishiTheMechanic/implementing-sign-in-with-solana-siws-ce35dadeda31

JA: https://zenn.dev/ki4themecha2q/articles/85b8725a142f76

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/henryhawke/taxfy This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The package is available as open source under the terms of the [Apache-2.0 License](https://www.apache.org/licenses/LICENSE-2.0).

## Code of Conduct

Everyone interacting in the Taxfy project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/henryhawke/taxfy/blob/master/CODE_OF_CONDUCT.md).
