# Git 全局配置設置

## 配置概述
此文檔記錄了為您設置的Git全局配置，這些設置將應用於所有Git倉庫。

## 基本用戶信息
```bash
git config --global user.name "Job28703"
git config --global user.email "win28703@gmail.com"
```

## 核心設置
```bash
# 預設分支名稱
git config --global init.defaultBranch main

# 預設編輯器
git config --global core.editor nano

# 行尾處理（適用於macOS/Linux）
git config --global core.autocrlf input

# 忽略文件權限變更
git config --global core.filemode false
```

## 推送和拉取設置
```bash
# 推送行為：只推送當前分支
git config --global push.default simple

# 拉取行為：使用合併而非rebase
git config --global pull.rebase false
```

## 顯示設置
```bash
# 啟用顏色輸出
git config --global color.ui auto
```

## 合併工具
```bash
# 設置合併工具
git config --global merge.tool vimdiff
```

## 實用別名
```bash
# 基本命令別名
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit

# 進階別名
git config --global alias.lg "log --oneline --decorate --graph --all"
git config --global alias.unstage "reset HEAD --"
git config --global alias.last "log -1 HEAD"
```

## 別名使用方法

### 基本別名
- `git st` = `git status` - 查看狀態
- `git co` = `git checkout` - 切換分支
- `git br` = `git branch` - 分支操作
- `git ci` = `git commit` - 提交更改

### 進階別名
- `git lg` - 美化的提交歷史圖表
- `git unstage <file>` - 取消暫存文件
- `git last` - 查看最後一次提交

## 當前完整配置
```
user.name=Job28703
user.email=win28703@gmail.com
credential.helper=osxkeychain
init.defaultbranch=main
core.editor=nano
core.autocrlf=input
core.filemode=false
push.default=simple
pull.rebase=false
color.ui=auto
alias.st=status
alias.co=checkout
alias.br=branch
alias.ci=commit
alias.lg=log --oneline --decorate --graph --all
alias.unstage=reset HEAD --
alias.last=log -1 HEAD
merge.tool=vimdiff
```

## 配置文件位置
全局配置保存在：`~/.gitconfig`

## 查看配置命令
```bash
# 查看所有全局配置
git config --global --list

# 查看特定配置
git config --global user.name
git config --global user.email
```

## 修改配置
如需修改任何配置，使用：
```bash
git config --global <key> <value>
```

例如：
```bash
git config --global user.name "新用戶名"
```

---
配置設置時間: $(date)
設置者: Augment Agent
