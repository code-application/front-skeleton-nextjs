# Next.js Skeleton

Next.js のプロジェクトを作成する際のスケルトンプロジェクト。

- [インストール方法](#インストール方法)
  - [Step1. Volta のインストール](#step1-volta-のインストール)
  - [Step2. Node.js およびパッケージ管理ツールのインストール](#step2-nodejs-およびパッケージ管理ツールのインストール)
- [実行方法](#実行方法)
- [プロジェクトの技術選定](#プロジェクトの技術選定)
  - [プロダクションコードに必要なライブラリ](#プロダクションコードに必要なライブラリ)
    - [ランタイムなど](#ランタイムなど)
    - [フレームワーク](#フレームワーク)
  - [開発・CI/CD・テスト関連のツール](#開発cicdテスト関連のツール)
    - [ランタイム・パッケージ管理](#ランタイムパッケージ管理)
    - [静的解析・フォーマッター](#静的解析フォーマッター)
    - [テスト](#テスト)
    - [コミットメッセージ管理とスタイル統一](#コミットメッセージ管理とスタイル統一)

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

---

## 実行方法

```bash
pnpm dev
```

---

## プロジェクトの技術選定

### プロダクションコードに必要なライブラリ

実行に影響があるため、バージョンの指定には注意すること。

#### ランタイムなど

- **[Node.js](https://nodejs.org/ja/)**
  [リリース一覧](https://nodejs.org/en/about/previous-releases/)にある ACTIVE LTS のバージョンをインストールする
- **[TypeScript](https://www.typescriptlang.org/)**
  JavaScript のスーパーセットである TypeScript を使用する
  [リリース一覧](https://github.com/microsoft/TypeScript/releases/)にある最新の Stable バージョンをインストールする

#### フレームワーク

- **[Next.js](https://nextjs.org/)**
  React ベースのフレームワーク
  [リリース一覧](https://github.com/vercel/next.js/releases/)にある Latest バージョンをインストールする
- **[Tailwind CSS](https://tailwindcss.com/)**
  CSS フレームワーク
  [リリース一覧](https://github.com/tailwindlabs/tailwindcss/releases/)にある Latest バージョンをインストールする

### 開発・CI/CD・テスト関連のツール

#### ランタイム・パッケージ管理

- **[Volta](https://volta.sh/)**
  プロジェクトの Node.js 、Pnpm のバージョンを管理するためのツール
- **[Pnpm](https://pnpm.io/)**
  プロジェクトのパッケージ管理を行うためのツール

#### 静的解析・フォーマッター

- **[Biome](https://biomejs.dev/ja/)**
  静的解析・フォーマッターを統合したツール

#### テスト

- **[Jest](https://jestjs.io/ja/)**
  テストフレームワーク
- **[React Testing Library](https://testing-library.com/)**
  React コンポーネントのテストを行うためのライブラリ

#### コミットメッセージ管理とスタイル統一

- **[Husky](https://typicode.github.io/husky/)**
  Git hooks を管理するためのツール
