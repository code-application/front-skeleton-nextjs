# Next.js Skeleton

- [インストール方法](#インストール方法)
  - [Step1. Volta のインストール](#step1-volta-のインストール)
  - [Step2. Node.js およびパッケージ管理ツールのインストール](#step2-nodejs-およびパッケージ管理ツールのインストール)
- [プロジェクトの技術選定](#プロジェクトの技術選定)
  - [プロダクションコードに必要なライブラリ](#プロダクションコードに必要なライブラリ)
    - [ランタイム](#ランタイム)
  - [開発・CI/CD・テスト関連のツール](#開発cicdテスト関連のツール)
    - [ランタイム・ツール管理](#ランタイムツール管理)
    - [パッケージ管理](#パッケージ管理)

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

パッケージ管理ツールには [Pnpm](https://pnpm.io/ja/) を使用する。

```bash
# Node.js のインストール
volta install node@20.17.0
# Pnpm のインストール
volta install pnpm@9.10.0

# インストールできていることを確認
$ node --version
v20.17.0
$ pnpm --version
9.10.0
```

## プロジェクトの技術選定

### プロダクションコードに必要なライブラリ

#### ランタイム

- **[Node.js](https://nodejs.org/ja/)**
  [リリース一覧](https://nodejs.org/en/about/previous-releases/)にある ACTIVE LTS のバージョンをインストールする

### 開発・CI/CD・テスト関連のツール

#### ランタイム・ツール管理

- **[Volta](https://volta.sh/)**
  プロジェクトの Node.js バージョンを管理するためのツール

#### パッケージ管理

- **[Pnpm](https://pnpm.io/)**
  プロジェクトのパッケージ管理を行うためのツール
