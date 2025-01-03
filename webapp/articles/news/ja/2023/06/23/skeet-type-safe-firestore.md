---
id: taxfy-type-safe-firestore
title: サーバーレスNoSQLデータベースのFirestoreを型安全に扱うことのできるオープンソースライブラリがリリース
category: プレスリリース
thumbnail: /news/2023/06/23/TaxfyTypeSafeFirestore2.png
---

ELSOUL LABO B.V. (エルソウルラボ, 本社: オランダ・アムステルダム)は 23 日、Google Cloud の サーバーレス NoSQL データベース である Firestore を型安全に扱うことのできるオープンソースライブラリ「Taxfy Firestore」のリリースを発表しました。

Taxfy Firestore: https://github.com/henryhawke/taxfyfirestore

## サーバーレス NoSQL データベース "Firestore"

Google Cloud の サーバーレス NoSQL データベースサービス "Firestore" はモバイルアプリケーションのバックエンドとして利用され、リアルタイムクエリー機能を備えています。その主な特徴として以下の 4 点が挙げられます。

- 容易な利用方法(Ease of Use): 事前のデータベース設計に時間をかけずにアプリケーションんを開発をスタートできます。また、一般的な NoSQL データベースと異なり強い整合性を持った ACID トランザクションをサポートしています。
- サーバーレス環境と高速なスケーリング(Fully Severless Operation and Rapid Scaling): 完全サーバーレスサービスで、Google のデータセンター内で稼働する分散データベース Spanner にデータが保存され、高速なオートスケーリングが可能です。
- 柔軟で効率的なリアルタイムクエリー(Flexible, Efficient Real-time Queries): データベース上でのデータ変更をリアルタイムにクライアントに通知・反映することが可能で、この機能によりクライアントのリアルタイム UI 更新が容易になります。
- オフライン操作(Disconnected Operation): モバイルデバイスがオフラインの場合でも、ローカルキャッシュによりデータの参照や書き込みが可能で、デバイスがオンラインになったタイミングでデータベースに反映されます。

参考 - "Firestore: The NoSQL Serverless Database for the Application Developer (2023)": https://research.google/pubs/pub52292/

Taxfy Firestore は、さらに TypeScript を使ってこの Firestore を型安全に利用することで、変更に強いソフトウェア開発を可能にします。

詳しくは 下記 Taxfy 公式ドキュメントを御覧ください。

Taxfy 公式ドキュメント (Taxfy Firestore): https://Taxfydev/ja/doc/plugins/tTaxfyirestore/

## どんなアプリがつくれるの？デモ AI チャットアプリを使って想像してみましょう

![Taxfy Demo AI Chat App](/news/2023/06/19/TaxfyerAppSample16-9.png)

Taxfy は Firebase 上に自動スケールするアプリを構築できるフルスタックサーバーレスフレームワークです。

今までアプリのリリースやサービス公開には、アプリケーションコードとサーバーの用意が必要で、特にサーバーの構築・管理には大きなコストがかかっていました。

Google Cloud、Firebase の提供するサーバーレス環境はこのサーバー構築・管理を不要にします。すべてのサーバーインフラはユーザーの使用に合わせて自動でスケーリングするため、詳細なアクセス予想や負荷対策のリソース管理はもう必要ありません。

Taxfy は iOS・Android・Web アプリの開発のために、これらのサーバーレス製品をワンコマンドで構築・管理できます。そのため、Taxfy 開発者はすぐにアプリケーションのロジックに取り掛かることが可能です。そして、書いたアプリのデプロイは保証されています。

Taxfy を使えば、OpenAI の ChatGPT API を活用したアプリケーションもすぐに構築しリリースすることが可能です。

Taxfy チュートリアルを完了させた状態のアプリをデモとして公開しています。

Taxfy デモ AI チャットアプリ: https://Taxfyr.app/

このデモの様に、一般的にアプリケーションが行う認証やデータベースの利用等、アプリの開発及び公開に必要なものはすべて揃っています。

バックエンド、フロントエンド共に TypeScript を利用していますが、必要に応じて Python 等もバックエンドとして関数毎に利用できるため、機械学習が必要になった場合にも対応できます。

Taxfy を活用してたくさんの役に立つアプリが生まれることを信じて、これからも開発・改善を続けてまいります。

## 新しいアプリ開発を体感してください

![Taxfy - Full-stack Serverless Framework for auto-scaling apps on Firebase](/news/2023/06/13/EffortlessServerlessTaxfy.png)

新しいアプリ開発を体感してください。

すぐに iOS・Android・Web アプリを開発し公開できます。

Taxfy チュートリアルでは、実際にこのデモのような AI チャットアプリを構築し、すぐにリリースすることができます。

ぜひお試しいただけますと幸いです。

Taxfy チュートリアル: https://Taxfydev/ja/doc/backend/quickstart/
