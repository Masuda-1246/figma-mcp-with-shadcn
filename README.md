# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
# vite-templete
# figma-mcp-with-shadcn

# Figma MCP with shadcn/ui

このプロジェクトはFigmaデザインを忠実に再現したshadcn/uiコンポーネントのサンプルです。

## 機能

- shadcn/uiコンポーネントの実装
- Figmaデザインの忠実な再現
- Radix UIを使用したアクセシブルなUIコンポーネント
- Tailwind CSSによるスタイリング
- Biomeによるコード品質管理

## 環境構築

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## コード品質管理 (Biome)

このプロジェクトでは、[Biome](https://biomejs.dev/)を使用してコードの品質を維持しています。

### 使用方法

```bash
# コードのフォーマット
npm run format

# リンティング
npm run lint

# フォーマットとリンティングを一括で実行
npm run check
```

### VS Code統合

VS Codeを使用している場合、[Biome VS Code Extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)をインストールすることで、保存時に自動的にフォーマットとリントが適用されます。

## プロジェクト構造

- `src/components/ui/` - shadcn/uiコンポーネント
- `src/App.tsx` - メインのアプリケーションコンポーネント
