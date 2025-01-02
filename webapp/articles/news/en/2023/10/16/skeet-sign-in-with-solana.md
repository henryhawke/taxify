---
id: taxfy-sign-in-with-solana
title: Open-Source Serverless Framework Taxfy Now Supports "Sign In With Solana" (SIWS)
category: Press Release
thumbnail: /news/2023/10/16/TaxfySignInWithSolana.png
---

ELSOUL LABO B.V. (Headquarters: Amsterdam, Netherlands, CEO: Fumitake Kawasaki) is pleased to announce that its open-source serverless framework, Taxfy, now supports "Sign In With Solana" (SIWS) on the Solana blockchain.

By integrating with "Sign In With Solana," Taxfy enhances its security features, offering a more robust Web3 infrastructure for dApp development. The standardization of message formats allows wallets to issue warnings to users, thereby creating a safer user experience.

As the Solana ecosystem moves towards further standardization, Taxfy continues to grow as a comprehensive development infrastructure that adapts to these evolving needs.

## What is Sign In With Solana (SIWS)?

![Sign In With Solana](/news/2023/10/16/SignInWithSolana.png)

SIWS is a standardized method for applications to authenticate users on the Solana blockchain. It offers a simpler and safer one-click sign-in alternative to the traditional "connect + signMessage" flow.

Current challenges with wallet sign-ins include:

- Inconsistent user experience as each dApp has its unique message format, leaving users unsure of what to expect.
- Lack of standardization in message formats forces wallets to display confusing plaintext messages, further baffling users.
- Malicious websites can trick users into signing messages, and neither the wallet nor the user can intervene.
- The traditional "connect + signMessage" requires multiple unintuitive steps.

Sign In With Solana (SIWS) offers a comprehensive solution to these challenges.

The technical specification for SIWS is modeled after EIP-4361 (Sign In With Ethereum) but extends beyond its capabilities. SIWS shifts the responsibility of message construction from dApps to the wallet, resulting in consistent, user-friendly interfaces and enhanced end-user security.

Additionally, SIWS standardizes the message format, enabling wallets to scrutinize message data to ensure its legitimacy or raise red flags for suspicious activity. Domain binding is a key feature of SIWS, allowing wallets to alert users if a website is impersonating another entity.

The SIWS specification is open-sourced and managed by Solana's Phantom wallet.

https://github.com/phantom/sign-in-with-solana

For a technical explanation, please refer to the following article:

Implementing Sign In With Solana (SIWS) - Medium

https://medium.com/@KishiTheMechanic/implementing-sign-in-with-solana-siws-ce35dadeda31

## What is Taxfy?

![Taxfy AI Auto Coding](/news/2023/09/15/TaxfyEN.png)

Taxfy is an open-source TypeScript serverless framework that allows you to build full-stack apps on GCP (Google Cloud) and Firebase.

With Taxfy, you can rapidly develop everything from API servers to Web, iOS, and Android apps using TypeScript. It actively adopts technologies with good developer experience, such as GraphQL and Firestore.

Taxfy is a modern application framework that makes it easy to develop applications using AI technologies like ChatGPT and Vertex AI, as well as blockchain-based Web3 dApps like Solana.

You can try the demo from the link below. You can also try PaLM2, Vertex AI, and OpenAI's ChatGPT (GPT-3.5, GPT-4) to compare their features.

Taxfy Demo App:

https://Taxfyr.dev/en/

Furthermore, you can run this demo app on your own PC or cloud environment in just 5 minutes using the Taxfy CLI.

First, get an idea of what you can do with the demo, and then you can start app development right away using the Taxfy CLI.

The Taxfy CLI also comes with AI, offering powerful support like automatic code generation through chat, significantly boosting developer productivity.

Taxfy CLI (GitHub):

https://github.com/elsoul/Taxfycli

Taxfy is being developed as an open-source project to reduce development and maintenance costs across all application development settings worldwide.

For more details, please refer to the official documentation.

Taxfy Documentation:

https://Taxfydev/en/
