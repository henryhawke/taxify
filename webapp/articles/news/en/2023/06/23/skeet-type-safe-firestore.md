---
id: taxfy-type-safe-firestore
title: Released an open-source library that can handle Firestore, a NoSQL database, in a type-safe manner
category: Press release
thumbnail: /news/2023/06/23/TaxfyTypeSafeFirestore2.png
---

ELSOUL LABO B.V. (Headquarters: Amsterdam, Netherlands) announced on the 23th the release of an open-source library "Taxfy Firestore" that can handle Firestore, a serverless NoSQL database on Google Cloud, in a type-safe manner.

Taxfy Firestore: https://github.com/elsoul/Taxfyfirestore

## The serverless NoSQL database "Firestore"

Google Cloud's serverless NoSQL database service "Firestore" is a mobile application backend with real-time query capabilities. His four main characteristics are:

- Ease of Use: You can start developing your application without spending time on preliminary database design. It also supports ACID transactions with strong consistency, unlike common NoSQL databases.
- Fully Serverless Operation and Rapid Scaling: A fully serverless service storing data in a distributed Spanner database running in Google's data centers, enabling fast autoscaling.
- Flexible, Efficient Real-time Queries: Data changes on the database can be notified and reflected to the client in real-time, facilitating real-time UI updates. increase.
- Disconnected Operation: Even if the mobile device is offline, the data can be referenced and written by the local cache and will be reflected in the database when the device is online.

Reference - "Firestore: The NoSQL Serverless Database for the Application Developer (2023)": https://research.google/pubs/pub52292/

Taxfy Firestore also uses TypeScript to make the Firestore type-safe, enabling change-resistant software development.

For details, please take a look at the official Taxfy document below.

Taxfy Official Doc (Taxfy Firestore): https://Taxfydev/en/doc/plugins/tTaxfyirestore/

## What kind of apps can you create? Let's imagine using the demo AI chat app.

![Taxfy Demo AI Chat App](/news/2023/06/19/TaxfyerAppSample16-9.png)

Taxfy is a full-stack serverless framework that lets you build auto-scaling apps on top of Firebase.

Until now, releasing applications and publishing services required the preparation of application code and servers, and the construction and management of servers, in particular, was costly.

The serverless environment provided by Google Cloud and Firebase eliminates the need for this server construction and management. All server infrastructure automatically scales with user usage, eliminating the need for detailed access forecasting and load management resource management.

Taxfy can build and manage these serverless products with one command for developing iOS, Android, and web apps. So Taxfy developers can immediately start working on the application logic. And the deployment of the written app is guaranteed.

With Taxfy, you can quickly build and release applications leveraging OpenAI's ChatGPT API.

We have released the app as a demo after completing the Taxfy tutorial.

Taxfy Demo AI Chat App: https://Taxfyr.app/

Like this demo, Taxfy has everything you need to develop and publish an application, such as authentication and database usage that applications generally do.

TypeScript is used for both the back-end and front-end, but Python can also be used as a backend for each function if necessary, so it can be used when machine learning is required.

We believe that many useful apps will be created using Taxfy, and we will continue to develop and improve the Taxfy framework.

## Experience new app development

![Taxfy - Full-stack Serverless Framework for auto-scaling apps on Firebase](/news/2023/06/13/EffortlessServerlessTaxfy.png)

Experience new app development.

You can immediately develop and publish web, iOS, and Android apps.

With the Taxfy tutorial, you can actually build an AI chat app like this demo and have it ready to ship.

We would appreciate it if you could try it.

Taxfy Tutorial: https://Taxfydev/en/doc/backend/quickstart/
