# Git 本地備份路徑指南

## 📍 主要備份路徑

### 本地備份目錄
```
/Users/tony/git_backups/
```

### 備份目錄結構
```
~/git_backups/
├── logs/                           # 備份日誌
│   └── backup_YYYYMMDD.log        # 每日備份日誌
├── tony_YYYYMMDD_HHMMSS.bundle    # Git bundle 完整備份
├── tony_info_YYYYMMDD_HHMMSS.txt  # 備份信息文件
└── tony_workdir_YYYYMMDD_HHMMSS.tar.gz  # 工作目錄歸檔（可選）
```

## 🛠️ 備份工具

### 1. 增強版備份工具
**路徑**: `T-1/git-backup-helper/git-backup-enhanced.sh`
**功能**: 支持本地和遠端備份
```bash
./git-backup-enhanced.sh --help
./git-backup-enhanced.sh --local    # 只本地備份
./git-backup-enhanced.sh --remote   # 只遠端備份
./git-backup-enhanced.sh --both     # 本地+遠端備份
```

### 2. 簡化版本地備份工具
**路徑**: `T-1/git-backup-helper/git-local-backup.sh`
**功能**: 專注於本地備份
```bash
./git-local-backup.sh --bundle     # 只創建 Git bundle
./git-local-backup.sh --archive    # 只創建工作目錄歸檔
./git-local-backup.sh --info       # 只創建備份信息
./git-local-backup.sh              # 創建所有備份
```

### 3. 原始備份工具
**路徑**: `T-1/git-backup-helper/git-backup.sh`
**功能**: 基本的遠端推送備份
```bash
git backup                          # 普通備份
git backup --full                   # 完整備份
```

## 📦 備份文件類型

### Git Bundle 文件 (.bundle)
- **用途**: 完整的Git倉庫備份，包含所有分支、標籤和提交歷史
- **大小**: 約 97KB（當前倉庫）
- **恢復方法**: 
  ```bash
  git clone tony_20250528_103122.bundle restored-repo
  ```

### 工作目錄歸檔 (.tar.gz)
- **用途**: 當前工作目錄的文件備份（不包含Git歷史）
- **排除項目**: .git, node_modules, *.log, .DS_Store, .cache等
- **恢復方法**:
  ```bash
  tar -xzf tony_workdir_20250528_103122.tar.gz
  ```

### 備份信息文件 (.txt)
- **用途**: 記錄備份時的倉庫狀態信息
- **內容**: 分支信息、最近提交、倉庫狀態等
- **用途**: 快速了解備份時的倉庫狀態

## 🔍 查看備份

### 列出所有備份
```bash
ls -la ~/git_backups/
```

### 查看備份大小
```bash
du -h ~/git_backups/*
```

### 查看最新備份信息
```bash
cat ~/git_backups/tony_info_*.txt | tail -20
```

### 查看備份日誌
```bash
cat ~/git_backups/logs/backup_$(date +%Y%m%d).log
```

## 🔄 恢復備份

### 從 Git Bundle 恢復完整倉庫
```bash
cd ~/Desktop
git clone ~/git_backups/tony_20250528_103122.bundle restored-tony
cd restored-tony
git remote set-url origin https://github.com/Job28703/tony.git
```

### 從工作目錄歸檔恢復文件
```bash
mkdir ~/Desktop/restored-workdir
cd ~/Desktop/restored-workdir
tar -xzf ~/git_backups/tony_workdir_20250528_103122.tar.gz
```

## 📅 備份策略建議

### 自動備份設置
可以設置 crontab 定期執行備份：
```bash
# 每天晚上11點執行本地備份
0 23 * * * cd /Users/tony/T-1 && /Users/tony/T-1/git-backup-helper/git-local-backup.sh --bundle
```

### 備份頻率建議
- **Git Bundle**: 每日或重要更改後
- **工作目錄歸檔**: 每週或重大版本發布前
- **備份信息**: 每次備份時自動生成

## 🧹 備份清理

### 清理舊備份（保留最近30天）
```bash
find ~/git_backups/ -name "*.bundle" -mtime +30 -delete
find ~/git_backups/ -name "*.tar.gz" -mtime +30 -delete
find ~/git_backups/ -name "*.txt" -mtime +30 -delete
```

## 📊 當前備份狀態

**最新備份時間**: 2025-05-28 10:31:48
**備份文件**:
- `tony_20250528_103122.bundle` (97KB)
- `tony_info_20250528_103148.txt`

**倉庫狀態**:
- 當前分支: fix-mcp-tool-names
- 最後提交: a85e36e ⚙️ 添加Git全局配置文檔和設置
- 待處理文件: 227個

---
文檔更新時間: $(date)
創建者: Augment Agent
