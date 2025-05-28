#!/bin/bash
# git-local-backup.sh - 簡化版本地Git備份工具

# 設定顏色變量
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# 設定備份目錄
BACKUP_BASE_DIR="$HOME/git_backups"

# 顯示幫助信息
show_help() {
    echo -e "${CYAN}Git 本地備份工具${NC}"
    echo "使用方法: $0 [選項]"
    echo "選項:"
    echo "  --bundle    只創建 Git bundle 備份"
    echo "  --archive   只創建工作目錄歸檔"
    echo "  --info      顯示備份信息"
    echo "  --help      顯示此幫助信息"
    echo ""
    echo "本地備份路徑: $BACKUP_BASE_DIR"
    exit 0
}

# 創建備份目錄
create_backup_dirs() {
    mkdir -p "$BACKUP_BASE_DIR"
    echo -e "${BLUE}備份目錄: $BACKUP_BASE_DIR${NC}"
}

# 創建 Git bundle 備份
create_bundle_backup() {
    local repo_name="$1"
    local timestamp="$2"
    local bundle_file="$BACKUP_BASE_DIR/${repo_name}_${timestamp}.bundle"
    
    echo -e "${CYAN}創建 Git bundle 備份...${NC}"
    git bundle create "$bundle_file" --all
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Git bundle 備份成功: $bundle_file${NC}"
        ls -lh "$bundle_file"
        return 0
    else
        echo -e "${RED}❌ Git bundle 備份失敗${NC}"
        return 1
    fi
}

# 創建工作目錄歸檔
create_archive_backup() {
    local repo_name="$1"
    local timestamp="$2"
    local archive_file="$BACKUP_BASE_DIR/${repo_name}_workdir_${timestamp}.tar.gz"
    
    echo -e "${CYAN}創建工作目錄歸檔...${NC}"
    tar -czf "$archive_file" \
        --exclude='.git' \
        --exclude='node_modules' \
        --exclude='*.log' \
        --exclude='.DS_Store' \
        --exclude='.cache' \
        --exclude='Library' \
        --exclude='Applications' \
        --exclude='Desktop' \
        --exclude='Documents' \
        --exclude='Downloads' \
        --exclude='Movies' \
        --exclude='Music' \
        --exclude='Pictures' \
        --exclude='Public' \
        .
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ 工作目錄歸檔成功: $archive_file${NC}"
        ls -lh "$archive_file"
        return 0
    else
        echo -e "${RED}❌ 工作目錄歸檔失敗${NC}"
        return 1
    fi
}

# 創建備份信息文件
create_backup_info() {
    local repo_name="$1"
    local timestamp="$2"
    local info_file="$BACKUP_BASE_DIR/${repo_name}_info_${timestamp}.txt"
    
    cat > "$info_file" << EOF
=== Git 倉庫備份信息 ===
備份時間: $(date)
倉庫名稱: $repo_name
當前分支: $(git branch --show-current)
最後提交: $(git log -1 --oneline)
遠端URL: $(git config --get remote.origin.url)
倉庫路徑: $(pwd)
備份路徑: $BACKUP_BASE_DIR

=== 分支信息 ===
$(git branch -a)

=== 最近5次提交 ===
$(git log --oneline -5)

=== 倉庫狀態 ===
$(git status --porcelain | wc -l) 個文件有變更
EOF
    
    echo -e "${GREEN}✅ 備份信息已保存: $info_file${NC}"
}

# 檢查參數
BUNDLE_ONLY=false
ARCHIVE_ONLY=false
INFO_ONLY=false

case "$1" in
    --help)
        show_help
        ;;
    --bundle)
        BUNDLE_ONLY=true
        ;;
    --archive)
        ARCHIVE_ONLY=true
        ;;
    --info)
        INFO_ONLY=true
        ;;
esac

# 檢查是否在 Git 倉庫中
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo -e "${RED}錯誤：當前目錄不是 Git 倉庫${NC}"
    exit 1
fi

# 創建備份目錄
create_backup_dirs

# 獲取倉庫信息
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
CURRENT_BRANCH=$(git branch --show-current)
REPO_NAME=$(basename -s .git $(git config --get remote.origin.url 2>/dev/null) || echo "local-repo")

echo -e "${CYAN}開始備份倉庫: ${REPO_NAME} (分支: ${CURRENT_BRANCH})${NC}"

# 執行備份
if [ "$BUNDLE_ONLY" = true ]; then
    create_bundle_backup "$REPO_NAME" "$TIMESTAMP"
elif [ "$ARCHIVE_ONLY" = true ]; then
    create_archive_backup "$REPO_NAME" "$TIMESTAMP"
elif [ "$INFO_ONLY" = true ]; then
    create_backup_info "$REPO_NAME" "$TIMESTAMP"
else
    # 預設：創建所有備份
    create_bundle_backup "$REPO_NAME" "$TIMESTAMP"
    create_archive_backup "$REPO_NAME" "$TIMESTAMP"
    create_backup_info "$REPO_NAME" "$TIMESTAMP"
fi

echo -e "${GREEN}🎉 本地備份完成！${NC}"
echo -e "${CYAN}查看備份: ls -la $BACKUP_BASE_DIR${NC}"
