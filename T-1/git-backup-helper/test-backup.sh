#!/bin/bash
# test-backup.sh - 測試Git備份工具

# 創建測試倉庫
TEST_DIR="/tmp/git-backup-test"
REPO1="${TEST_DIR}/repo1"
REPO2="${TEST_DIR}/repo2"

# 清理舊的測試目錄
rm -rf "${TEST_DIR}" 2>/dev/null

# 創建測試目錄
mkdir -p "${REPO1}" "${REPO2}"

# 初始化第一個測試倉庫
echo "初始化測試倉庫1..."
(cd "${REPO1}" && \
 git init && \
 echo "# 測試倉庫1" > README.md && \
 git add README.md && \
 git commit -m "初始提交")

# 初始化第二個測試倉庫
echo "初始化測試倉庫2..."
(cd "${REPO2}" && \
 git init && \
 echo "# 測試倉庫2" > README.md && \
 git add README.md && \
 git commit -m "初始提交")

# 在第一個倉庫中創建一個新文件
echo "在倉庫1中創建新文件..."
(cd "${REPO1}" && \
 echo "新文件內容" > newfile.txt && \
 git add newfile.txt)

# 運行備份腳本
echo -e "\n=== 運行備份測試 ==="
./git-backup.sh "${REPO1}" "${REPO2}"

# 顯示結果
echo -e "\n=== 測試完成 ==="
echo "測試倉庫1: ${REPO1}"
echo "測試倉庫2: ${REPO2}"
echo "備份文件保存在: ${HOME}/git_backups/"

# 顯示日誌文件
LOG_FILE="${HOME}/git_backups/backup_$(date '+%Y%m%d').log"
if [ -f "${LOG_FILE}" ]; then
    echo -e "\n=== 日誌文件內容 ==="
    cat "${LOG_FILE}"
else
    echo "未找到日誌文件: ${LOG_FILE}"
fi

echo -e "\n測試完成。請檢查以上輸出以確認備份是否成功。"
