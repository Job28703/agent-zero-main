#!/bin/bash
# git-backup-enhanced.sh - 增強版 Git 備份工具（支持本地和遠端備份）

# 設定顏色變量
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# 設定備份目錄
BACKUP_BASE_DIR="$HOME/git_backups"
LOG_DIR="$BACKUP_BASE_DIR/logs"

# 顯示幫助信息
show_help() {
    echo -e "${CYAN}Git 增強版備份工具${NC}"
    echo "使用方法: $0 [選項]"
    echo "選項:"
    echo "  --full      執行完整備份（包括所有分支和標籤）"
    echo "  --local     只執行本地備份（不推送到遠端）"
    echo "  --remote    只推送到遠端（不創建本地備份）"
    echo "  --both      同時執行本地和遠端備份（預設）"
    echo "  --help      顯示此幫助信息"
    echo ""
    echo "本地備份路徑: $BACKUP_BASE_DIR"
    echo "日誌路徑: $LOG_DIR"
    exit 0
}

# 創建備份目錄
create_backup_dirs() {
    mkdir -p "$BACKUP_BASE_DIR"
    mkdir -p "$LOG_DIR"
    echo -e "${BLUE}備份目錄已準備: $BACKUP_BASE_DIR${NC}"
}

# 記錄日誌
log_message() {
    local message="$1"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    local log_file="$LOG_DIR/backup_$(date '+%Y%m%d').log"
    echo "[$timestamp] $message" >> "$log_file"
    echo -e "$message"
}

# 創建本地備份
create_local_backup() {
    local repo_name="$1"
    local timestamp="$2"
    local backup_dir="$BACKUP_BASE_DIR/${repo_name}_${timestamp}"
    
    log_message "${CYAN}創建本地備份到: $backup_dir${NC}"
    
    # 創建備份目錄
    mkdir -p "$backup_dir"
    
    # 使用 git bundle 創建完整倉庫備份
    git bundle create "$backup_dir/${repo_name}.bundle" --all
    if [ $? -eq 0 ]; then
        log_message "${GREEN}✅ Git bundle 備份成功${NC}"
    else
        log_message "${RED}❌ Git bundle 備份失敗${NC}"
        return 1
    fi
    
    # 備份工作目錄（排除 .git）
    tar -czf "$backup_dir/${repo_name}_workdir.tar.gz" \
        --exclude='.git' \
        --exclude='node_modules' \
        --exclude='*.log' \
        --exclude='.DS_Store' \
        .
    
    if [ $? -eq 0 ]; then
        log_message "${GREEN}✅ 工作目錄備份成功${NC}"
    else
        log_message "${YELLOW}⚠️  工作目錄備份失敗${NC}"
    fi
    
    # 創建備份信息文件
    cat > "$backup_dir/backup_info.txt" << EOF
備份時間: $(date)
倉庫名稱: $repo_name
當前分支: $(git branch --show-current)
最後提交: $(git log -1 --oneline)
遠端URL: $(git config --get remote.origin.url)
備份類型: 本地備份
EOF
    
    log_message "${GREEN}✅ 本地備份完成: $backup_dir${NC}"
    return 0
}

# 檢查參數
FULL_BACKUP=false
LOCAL_ONLY=false
REMOTE_ONLY=false
BOTH_BACKUP=true

case "$1" in
    --help)
        show_help
        ;;
    --full)
        FULL_BACKUP=true
        ;;
    --local)
        LOCAL_ONLY=true
        BOTH_BACKUP=false
        ;;
    --remote)
        REMOTE_ONLY=true
        BOTH_BACKUP=false
        ;;
    --both)
        BOTH_BACKUP=true
        ;;
esac

# 檢查是否在 Git 倉庫中
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo -e "${RED}錯誤：當前目錄不是 Git 倉庫${NC}"
    echo -e "請在 Git 倉庫目錄中運行此命令，或者使用以下命令初始化一個新倉庫："
    echo -e "  git init"
    exit 1
fi

# 創建備份目錄
create_backup_dirs

# 獲取倉庫信息
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
CURRENT_BRANCH=$(git branch --show-current)
REPO_NAME=$(basename -s .git $(git config --get remote.origin.url 2>/dev/null) || echo "local-repo")

log_message "${CYAN}開始備份倉庫: ${REPO_NAME} (分支: ${CURRENT_BRANCH})${NC}"

# 添加所有更改
log_message "添加所有更改..."
git add -A

# 檢查是否有更改需要提交
if git diff-index --quiet HEAD --; then
    log_message "沒有更改需要提交。"
    COMMIT_NEEDED=false
else
    COMMIT_NEEDED=true
    # 提交更改
    COMMIT_MSG="backup-${TIMESTAMP}"
    log_message "提交更改: ${COMMIT_MSG}"
    git commit -m "${COMMIT_MSG}" || {
        log_message "${RED}提交失敗${NC}"
        exit 1
    }
fi

# 執行本地備份
if [ "$LOCAL_ONLY" = true ] || [ "$BOTH_BACKUP" = true ]; then
    create_local_backup "$REPO_NAME" "$TIMESTAMP"
fi

# 執行遠端備份
if [ "$REMOTE_ONLY" = true ] || [ "$BOTH_BACKUP" = true ]; then
    if [ "$COMMIT_NEEDED" = true ]; then
        log_message "推送到遠端倉庫..."
        
        if [ "$FULL_BACKUP" = true ]; then
            # 完整備份：推送所有分支和標籤
            git push --all origin && git push --tags origin || {
                log_message "${YELLOW}警告：完整備份失敗，嘗試只推送當前分支...${NC}"
                git push origin "${CURRENT_BRANCH}" || {
                    log_message "${RED}推送失敗${NC}"
                    exit 1
                }
            }
            log_message "${GREEN}✅ 完整遠端備份完成! (所有分支和標籤已推送)${NC}"
        else
            # 普通備份：只推送當前分支
            git push origin "${CURRENT_BRANCH}" || {
                log_message "${RED}推送失敗${NC}"
                exit 1
            }
            log_message "${GREEN}✅ 遠端備份完成! (${CURRENT_BRANCH} 分支已推送)${NC}"
        fi
    else
        log_message "${YELLOW}沒有新的提交需要推送${NC}"
    fi
fi

log_message "${GREEN}🎉 備份操作完成！${NC}"
log_message "${CYAN}查看備份: ls -la $BACKUP_BASE_DIR${NC}"
log_message "${CYAN}查看日誌: cat $LOG_DIR/backup_$(date '+%Y%m%d').log${NC}"
