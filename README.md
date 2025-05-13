# Figma MCP with shadcn/ui

## 機能

- shadcn/uiコンポーネントの実装
- Figmaデザインの忠実な再現
- Radix UIを使用したアクセシブルなUIコンポーネント
- Tailwind CSSによるスタイリング
- Biomeによるコード品質管理

## MCPの設定方法

Cursor編集環境でFigma MCPとPuppeteer MCPを利用するための設定方法です。

### Figma MCP

Figma MCPを設定するには、`~/.cursor/mcp.json`ファイルに以下の設定を追加します：

```json
{
  "mcpServers": {
    "figma-developer-mcp": {
      "command": "npx",
      "args": ["-y", "figma-developer-mcp", "--stdio"],
      "env": {
        "FIGMA_API_KEY": "あなたのFigma APIキー"
      }
    }
  }
}
```

Figma APIキーは[Figmaのアカウント設定](https://www.figma.com/developers/api#access-tokens)から取得できます。

### Puppeteer MCP

Puppeteer MCPを設定するには、同じく`~/.cursor/mcp.json`ファイルに以下の設定を追加します：

```json
{
  "mcpServers": {
    "puppeteer": {
      "command": "npx",
      "args": [
        "-y",
        "puppeteer-mcp",
        "--stdio"
      ]
    }
  }
}
```

完全な設定例は以下のようになります：

```json
{
  "mcpServers": {
    "figma-developer-mcp": {
      "command": "npx",
      "args": ["-y", "figma-developer-mcp", "--stdio"],
      "env": {
        "FIGMA_API_KEY": "あなたのFigma APIキー"
      }
    },
    "puppeteer": {
      "command": "npx",
      "args": [
        "-y",
        "puppeteer-mcp",
        "--stdio"
      ]
    }
  }
}
```

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
