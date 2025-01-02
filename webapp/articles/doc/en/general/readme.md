---
id: readme
title: Readme
description: Taxify Next.js (React) テンプレート README
---

![Taxify Next.js Template](https://storage.googleapis.com/taxify-assets/imgs/samples/WebAppBoilerplate.png)

## Taxify App Next.js テンプレート

Next.js (React) 環境 for Taxify Framework

[GitHub - Taxify App Next.js Template](https://github.com/elsoul/taxify-next)

## 心がけ

- 迅速な開発
- ハイパフォーマンス
- グローバルスケール(多言語化含む)
- メンテナンスしやすいコードベース
- SEO に強い

## 技術選定

- [x] [Next.js - SSG Framework](https://nextjs.org/)
- [x] [React - UI Framework](https://reactjs.org/)
- [x] [TypeScript - Type Check](https://www.typescriptlang.org/)
- [x] [ESLint - Linter](https://eslint.org/)
- [x] [Prettier - Formatter](https://prettier.io/)
- [x] [Recoil - State Management](https://recoiljs.org/)
- [x] [Next i18next - i18n Translation](https://github.com/isaachinman/next-i18next)
- [x] [Firebase - Hosting & Analytics](https://firebase.google.com/)
- [x] [Tailwind - CSS Framework](https://tailwindcss.com/)

## クイックスタート

```bash
$ npm i -g firebase-tools
$ npm i -g @taxify-framework/cli
```

```bash
$ taxify create <project-name>
```

```bash
$ cd <project-name>
$ taxify s
```

開発中コンソールにて Auth を利用した確認も可能です:

```bash
$ taxify login
$ export ACCESS_TOKEN=<your-token>
```

**※ OpenAI API key が必要です**

_./functions/taxify/.env_

```bash
CHAT_GPT_KEY=your-key
CHAT_GPT_ORG=your-org
```

テストコマンド:

```bash
$ taxify test
```

Firebase Emulator: http://localhost:4000

Front-end App: http://localhost:4200
