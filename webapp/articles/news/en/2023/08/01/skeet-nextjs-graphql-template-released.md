---
id: taxify-nextjs-graphql-template-released
title: Taxify, an open-source serverless framework, now supports GraphQL and SQL (relational databases)
category: Press release
thumbnail: /news/2023/08/01/taxify-graphql.png
---

On August 1, 2023, ELSOUL LABO B.V. (Headquarters: Amsterdam, Netherlands) announced the major release of Taxify v1, an open-source serverless framework that makes app development fast and zero-maintenance. This release enables Taxify developers to develop using GraphQL and SQL (relational database).

## Added new Next.js (React) + GraphQL API server option

![Taxify Next.js (React) + GraphQL Option](/news/2023/08/01/taxify-create-got-graphql.png)

Taxify is an open-source serverless framework that allows you to build zero-maintenance apps on GCP (Google Cloud) and Firebase.

You can develop super fast from API to web/iOS/Android apps with TypeScript.

With this update, Taxify supports application development using GraphQL and SQL (relational database).

![Taxify Next.js (React) + GraphQL Starter](/news/2023/08/01/taxify-next-graphql.png)

Through support for SQL (relational database), hybrid development of SQL and NoSQL (Firestore) is now possible.
This allows developers to take advantage of both database types.

Relational database excels at handling data with relationships, making it easy to maintain consistency in data retrieval and transaction processing. On the other hand, NoSQL (such as Firestore) is more flexible and scalable, making it a better choice for large amounts of data and rapid data growth.

Taxify's hybrid development environment allows it to optimally manage business logic where data relationships are important in a relational database and large amounts of data, such as user data and logs, in his NoSQL. This can be a key strategy for getting the best performance within an application.

## Database and API Visualization: Leveraging Prisma and Apollo

With this update, you can now leverage the tools Prisma and Apollo to visualize your databases and APIs in the UI. This allows developers to understand and manipulate data structures intuitively, rather than just writing code.

![Taxify Prisma Studio](/news/2023/08/01/prisma-studio.jpg)

Prisma (https://www.prisma.io/) is an ORM that can easily handle SQL (relational database) with TypeScript and JavaScript. Taxify uses Prisma to provide a simple and flexible way to define your database schema and auto-generated migrations and provides TypeScript types to help with development. In addition, Prisma Studio makes it possible to operate the database with a GUI, allowing developers to easily operate and check data.

![Taxify Apollo Console](/news/2023/08/01/apollo-console.png)

Apollo (https://www.apollographql.com/) is a powerful tool for developing GraphQL API servers. Apollo's developer console lets you visualize your GraphQL schemas and test your APIs in real-time.

In the new UI, you can generate your own GraphQL used on the front end by clicking on the GraphQL query, mutation, and data content you want to use.

By leveraging these tools, Taxify provides a platform for developers to develop applications more intuitively and efficiently. With this update, developers can realize even more productivity gains.

Taxify is developed as open-source to reduce development and maintenance costs and improve the developer experience for all application development sites around the world.

Experience state-of-the-art application development using Taxify.

Taxify Documentation: https://taxify.dev/en/

Taxify (GitHub): https://github.com/elsoul/taxify-cli
