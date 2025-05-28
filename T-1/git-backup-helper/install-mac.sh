#!/bin/bash
# install-mac.sh - Git 備份工具安裝腳本 (適用於 Mac M1)

echo "🚀 開始安裝 Git 備份工具..."

# 檢查是否已安裝 Homebrew
if ! command -v brew &> /dev/null; then
    echo "❌ 未找到 Homebrew，正在為您安裝..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
fi

# 創建 ~/.local/bin 目錄（如果不存在）
mkdir -p ~/.local/bin

# 複製腳本到 ~/.local/bin
cp git-backup.sh ~/.local/bin/git-backup
chmod +x ~/.local/bin/git-backup

# 檢查 shell 類型並設置 PATH
SHELL_RC="$HOME/.zshrc"
if [ ! -f "$SHELL_RC" ]; then
    SHELL_RC="$HOME/.bash_profile"
    touch "$SHELL_RC"
fi

# 添加 ~/.local/bin 到 PATH
if ! grep -q '\.local/bin' "$SHELL_RC"; then
    echo 'export PATH="$HOME/.local/bin:$PATH"' >> "$SHELL_RC"
    echo "✅ 已將 ~/.local/bin 添加到 PATH 環境變量"
fi

# 設置 git 別名
if ! grep -q 'alias git-backup=' "$SHELL_RC"; then
    echo 'alias git-backup=~/.local/bin/git-backup' >> "$SHELL_RC"
    echo 'git() { if [ "$1" = "backup" ]; then shift; git-backup "$@"; else command git "$@"; fi; }' >> "$SHELL_RC"
    echo "✅ 已設置 git backup 別名"
fi

# 重新加載 shell 配置
echo "🔄 正在重新加載 shell 配置..."
source "$SHELL_RC" 2>/dev/null || true

# 檢查是否安裝成功
if command -v git-backup &> /dev/null; then
    echo "✨ 安裝完成！"
    echo "您現在可以使用以下命令來備份您的 Git 倉庫："
    echo "  git backup           # 普通備份（當前分支）"
    echo "  git backup --full    # 完整備份（所有分支和標籤）"
    echo "  git-backup --help    # 顯示幫助信息"
else
    echo "❌ 安裝過程中出現問題，請手動執行以下命令："
    echo "source $SHELL_RC"
    echo "然後再次嘗試運行 git-backup --help"
fi
