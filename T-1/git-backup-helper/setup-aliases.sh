#!/bin/bash
# setup-aliases.sh - 設置 Git 備份別名

# 設定顏色
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# 獲取腳本所在目錄
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SCRIPT_PATH="${SCRIPT_DIR}/git-backup.sh"

# 檢查 shell 配置文件
if [ -f "${HOME}/.zshrc" ]; then
    CONFIG_FILE="${HOME}/.zshrc"
elif [ -f "${HOME}/.bashrc" ]; then
    CONFIG_FILE="${HOME}/.bashrc"
else
    CONFIG_FILE="${HOME}/.bash_profile"
    touch "${CONFIG_FILE}"
fi

# 添加別名
add_alias() {
    local alias_name=$1
    local alias_cmd=$2
    
    # 檢查別名是否已存在
    if grep -q "alias ${alias_name}=" "${CONFIG_FILE}"; then
        echo "別名 '${alias_name}' 已存在，跳過..."
    else
        echo "# Git 備份別名" >> "${CONFIG_FILE}"
        echo "alias ${alias_name}='${alias_cmd}'" >> "${CONFIG_FILE}"
        echo -e "${GREEN}已添加別名: ${alias_name}${NC}"
    fi
}

# 添加別名
add_alias "gitbackup" "${SCRIPT_PATH}"
add_alias "gitfullbackup" "${SCRIPT_PATH} --full"

# 設置執行權限
chmod +x "${SCRIPT_PATH}"

# 輸出提示信息
echo -e "\n${GREEN}別名設置完成!${NC}"
echo "請運行以下命令使變更生效:"
echo "source ${CONFIG_FILE}"
echo -e "\n使用方式:"
"echo "  1. 在 Git 倉庫目錄中執行: gitbackup"
echo "  2. 完整備份(包括所有分支和標籤): gitfullbackup"

echo -e "\n注意: 請確保 ${SCRIPT_PATH} 有執行權限。"
