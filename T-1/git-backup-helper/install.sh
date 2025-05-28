#!/bin/bash
# install.sh - Git備份工具安裝腳本

# 設定顏色
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 日誌函數
log() {
    local level=$1
    local message=$2
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
        "INFO") echo -e "[${timestamp}] ${GREEN}INFO${NC} - ${message}" ;;
        "WARN") echo -e "[${timestamp}] ${YELLOW}WARN${NC} - ${message}" ;;
        "ERROR") echo -e "[${timestamp}] ${RED}ERROR${NC} - ${message}" ;;
        *) echo -e "[${timestamp}] ${message}" ;;
    esac
}

# 檢查命令是否存在
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# 主安裝函數
install() {
    log "INFO" "開始安裝Git備份工具..."
    
    # 檢查Git是否安裝
    if ! command_exists git; then
        log "ERROR" "未檢測到Git，請先安裝Git"
        exit 1
    fi
    
    # 創建安裝目錄
    local install_dir="/usr/local/bin"
    local backup_script="git-backup"
    local config_dir="${HOME}/.config/git-backup"
    
    log "INFO" "創安裝目錄: ${install_dir}"
    sudo mkdir -p "${install_dir}"
    
    # 複製腳本
    log "INFO" "安裝腳本到 ${install_dir}/${backup_script}"
    sudo cp "$(dirname "$0")/git-backup.sh" "${install_dir}/${backup_script}"
    
    # 設定執行權限
    log "INFO" "設定執行權限..."
    sudo chmod +x "${install_dir}/${backup_script}"
    
    # 創建設置目錄
    log "INFO" "創建設置目錄: ${config_dir}"
    mkdir -p "${config_dir}"
    
    # 創建別名
    log "INFO" "設定別名..."
    local alias_cmd="alias git-backup='${install_dir}/${backup_script}'"
    
    # 檢查shell類型
    local shell_rc=""
    if [ -n "${ZSH_VERSION}" ]; then
        shell_rc="${HOME}/.zshrc"
    elif [ -n "${BASH_VERSION}" ]; then
        shell_rc="${HOME}/.bashrc"
    else
        log "WARN" "無法識別的shell，請手動添加別名到您的shell配置文件中:"
        echo "  ${alias_cmd}"
    fi
    
    # 添加別名到shell配置文件
    if [ -n "${shell_rc}" ]; then
        if ! grep -q "alias git-backup=" "${shell_rc}" 2>/dev/null; then
            echo -e "\n# Git備份工具別名\n${alias_cmd}" >> "${shell_rc}"
            log "INFO" "已添加別名到 ${shell_rc}"
            log "INFO" "請運行 'source ${shell_rc}' 或重新開啟終端使變更生效"
        else
            log "INFO" "別名已存在於 ${shell_rc}"
        fi
    fi
    
    # 創建定時任務配置示例
    local cron_example="# 每天凌晨3點執行備份\n0 3 * * * ${install_dir}/${backup_script} /path/to/your/repo1 /path/to/your/repo2"
    echo -e "${cron_example}" > "${config_dir}/cron.example"
    
    log "INFO" "${GREEN}安裝完成!${NC}"
    log "INFO" "使用方式:"
    echo "  1. 基本使用: git-backup /path/to/your/repo"
    echo "  2. 備份多個倉庫: git-backup /path/to/repo1 /path/to/repo2"
    echo "  3. 在倉庫目錄中: cd /path/to/repo && git-backup"
    echo -e "\n定時任務配置範例已保存到: ${config_dir}/cron.example"
}

# 執行安裝
install "$@"
