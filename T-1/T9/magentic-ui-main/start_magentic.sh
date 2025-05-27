#!/bin/bash

# Magentic-UI 啟動腳本
# 解決 CORS 和環境變量問題

echo "🚀 啟動 Magentic-UI..."

# 設置所有必需的環境變量
# 請設置您的 OpenAI API 密鑰
if [ -z "$OPENAI_API_KEY" ]; then
    echo "⚠️  請設置 OPENAI_API_KEY 環境變量"
    echo "   export OPENAI_API_KEY='your-api-key-here'"
    exit 1
fi
export MAGENTIC_UI_API_DOCS=true
export MAGENTIC_UI_DEFAULT_USER_ID=default@magentic-ui.com
export MAGENTIC_UI_DATABASE_URI=sqlite:///$(pwd)/magentic_ui.db
export MAGENTIC_UI_UPGRADE_DATABASE=true

# 設置工作空間環境變量
export INTERNAL_WORKSPACE_ROOT=$(pwd)/workspace
export EXTERNAL_WORKSPACE_ROOT=$(pwd)/workspace
export INSIDE_DOCKER=0

# 設置其他必需變量
export _HOST=0.0.0.0
export _PORT=8082
export _CONFIG=$(pwd)/config.yaml

# 創建必要的目錄
mkdir -p ~/magentic-ui-data
mkdir -p $(pwd)/workspace
mkdir -p $(pwd)/configs

# 激活虛擬環境
source .venv_clean/bin/activate

echo "✅ 環境配置完成"
echo "📡 OpenAI API Key: ${OPENAI_API_KEY:0:20}..."
echo "📁 工作空間: $(pwd)/workspace"
echo "🗄️ 數據庫: $(pwd)/magentic_ui.db"

# 啟動應用
echo "🔄 啟動 Magentic-UI 服務器..."

uvicorn magentic_ui.backend.web.app:app \
  --host 0.0.0.0 \
  --port 8082 \
  --reload

echo "🎉 Magentic-UI 已啟動！"
echo "🌐 訪問地址: http://localhost:8082"
echo "📚 API 文檔: http://localhost:8082/docs"
