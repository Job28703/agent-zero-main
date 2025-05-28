#!/bin/bash
# git-backup.sh - 簡易 Git 備份工具

# 設定顏色變量
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 顯示幫助信息
show_help() {
    echo "使用方法: $0 [選項]"
    echo "選項:"
    echo "  --full    執行完整備份（包括所有分支和標籤）"
    echo "  --help    顯示此幫助信息"
    exit 0
}

# 檢查幫助選項
if [[ "$1" == "--help" ]]; then
    show_help
fi

# 檢查是否為完整備份
FULL_BACKUP=false
if [[ "$1" == "--full" ]]; then
    FULL_BACKUP=true
    echo -e "${BLUE}執行完整備份...${NC}"
fi

# 檢查是否在 Git 倉庫中
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo -e "${RED}錯誤：當前目錄不是 Git 倉庫${NC}"
    echo -e "請在 Git 倉庫目錄中運行此命令，或者使用以下命令初始化一個新倉庫："
    echo -e "  git init"
    exit 1
fi

# 獲取當前時間戳
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# 顯示當前倉庫信息
CURRENT_BRANCH=$(git branch --show-current)
REPO_NAME=$(basename -s .git $(git config --get remote.origin.url 2>/dev/null) || echo "local-repo")
echo -e "${GREEN}正在備份倉庫: ${REPO_NAME} (分支: ${CURRENT_BRANCH})${NC}"

# 添加所有更改
echo "添加所有更改..."
git add -A

# 檢查是否有更改需要提交
if git diff-index --quiet HEAD --; then
    echo "沒有更改需要提交。"
else
    # 提交更改
    COMMIT_MSG="backup-${TIMESTAMP}"
    echo "提交更改: ${COMMIT_MSG}"
    git commit -m "${COMMIT_MSG}" || {
        echo -e "${RED}提交失敗${NC}"
        exit 1
    }
    
    # 推送到遠端
    echo "推送到遠端倉庫..."
    
    if [ "$FULL_BACKUP" = true ]; then
        # 完整備份：推送所有分支和標籤
        git push --all origin && git push --tags origin || {
            echo -e "${YELLOW}警告：完整備份失敗，嘗試只推送當前分支...${NC}"
            git push origin "${CURRENT_BRANCH}" || {
                echo -e "${RED}推送失敗${NC}"
                exit 1
            }
        }
        echo -e "${GREEN}完整備份完成! (所有分支和標籤已推送)${NC}"
    else
        # 普通備份：只推送當前分支
        git push origin "${CURRENT_BRANCH}" || {
            echo -e "${RED}推送失敗${NC}"
            exit 1
        }
        echo -e "${GREEN}備份完成! (${CURRENT_BRANCH} 分支已推送)${NC}"
    fi
fi