# Next.js Skeleton

Next.js のプロジェクトを作成する際のスケルトンプロジェクト。

技術スタックについては[こちら](docs/technology-stack.md)を参照。

- [インストール方法](#インストール方法)
  - [Step1. Volta のインストール](#step1-volta-のインストール)
  - [Step2. Node.js およびパッケージ管理ツールのインストール](#step2-nodejs-およびパッケージ管理ツールのインストール)
- [実行方法](#実行方法)
- [（Optional）開発者向け](#optional開発者向け)
  - [コミットメッセージのスタイル](#コミットメッセージのスタイル)

---

## インストール方法

### Step1. Volta のインストール

[公式サイト](https://docs.volta.sh/guide/getting-started)に従ってインストールすること。

```bash
# macOS and Linux
curl https://get.volta.sh | bash
# Windows
winget install Volta.Volta

# インストールできていることを確認
volta --version
2.0.1
```

### Step2. Node.js およびパッケージ管理ツールのインストール

パッケージ管理ツールには [pnpm](https://pnpm.io/ja/) を使用する。

```bash
# Node.js のインストール
volta install node@20.17.0
# pnpm のインストール
volta install pnpm@9.10.0

# インストールできていることを確認
$ node --version
v20.17.0
$ pnpm --version
9.10.0
```

---

## 実行方法

```bash
# ローカルでの実行
pnpm run dev:local
# モックを使って実行
pnpm run dev:mock
# ドキュメントを生成
pnpm run doc
```

---

## （Optional）開発者向け

### コミットメッセージのスタイル

コミットする際は必ず下記のコマンドを使用すること。これによってコミットメッセージのスタイルが統一している。

```bash
pnpm run commit
```
