# Git 備份工具

這是一個簡單而強大的 Git 備份工具，可以幫助您自動化 Git 倉庫的備份流程。

## 功能特點

- 自動檢測並提交未提交的更改
- 推送到遠端倉庫
- 創建完整的 Git bundle 備份
- 支持多倉庫批量備份
- 詳細的日誌記錄
- 簡單易用的命令行界面

## 安裝方法

1. 克隆或下載此存儲庫：
   ```bash
   git clone https://github.com/yourusername/git-backup-helper.git
   cd git-backup-helper
   ```

2. 運行安裝腳本：
   ```bash
   chmod +x install.sh
   ./install.sh
   ```

3. 重新加載您的 shell 配置：
   ```bash
   source ~/.bashrc  # 如果使用 bash
   # 或
   source ~/.zshrc   # 如果使用 zsh
   ```

## 使用方法

### 基本使用

```bash
# 備份當前目錄的 Git 倉庫
git-backup

# 備份指定目錄的 Git 倉庫
git-backup /path/to/your/repo

# 備份多個倉庫
git-backup /path/to/repo1 /path/to/repo2 /path/to/repo3
```

### 設置定時備份

您可以使用 `cron` 設置定時備份任務：

1. 編輯 crontab：
   ```bash
   crontab -e
   ```

2. 添加以下行（根據需要修改時間和路徑）：
   ```
   # 每天凌晨3點備份指定倉庫
   0 3 * * * /usr/local/bin/git-backup /path/to/your/repo1 /path/to/your/repo2
   ```

## 備份位置

默認情況下，備份的 bundle 文件會保存在 `~/git_backups` 目錄下。

## 日誌文件

每次運行的日誌會保存在 `~/git_backups/backup_YYYYMMDD.log` 文件中。

## 卸載

如果您想卸載此工具，可以運行：

```bash
sudo rm /usr/local/bin/git-backup
# 並從您的 shell 配置文件中刪除別名
```

## 許可證

MIT License
