# 🎨 世界名畫展示館

> 一個結合經典藝術欣賞與個人收藏功能的互動式數位平台

[![Version](https://img.shields.io/badge/version-v2.0.1-blue.svg)](https://github.com/your-repo/releases)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## 📋 專案概述

世界名畫展示館是一個現代化的數位藝術瀏覽平台，提供：
- 🖼️ **35幅世界經典名畫**欣賞
- 📤 **個人畫作上傳**功能
- 🎨 **科技感界面**設計
- 💾 **本地存儲**保護隱私
- 📱 **響應式設計**支援

## ✨ 主要功能

### 🎯 核心功能
- **翻頁瀏覽**: 流暢的畫作瀏覽體驗
- **畫作上傳**: 支援 JPG/PNG/GIF 格式
- **拖拽上傳**: 直觀的拖拽操作
- **本地存儲**: 數據完全保存在本地

### 🎨 設計特色
- **科技感界面**: 深色主題 + 霓虹色彩
- **玻璃擬態**: 半透明效果和模糊背景
- **響應式設計**: 適配桌面和移動設備
- **無障礙支援**: 鍵盤導航和 ARIA 標籤

## 🚀 快速開始

### 1. 克隆專案
```bash
git clone <repository-url>
cd T7
```

### 2. 開啟應用
```bash
# 直接在瀏覽器中開啟
open index.html

# 或使用本地服務器
python3 -m http.server 8000
# 然後訪問 http://localhost:8000
```

### 3. 開始使用
- 🖱️ 點擊翻頁按鈕或使用鍵盤左右箭頭鍵
- 📤 點擊「上傳畫作」按鈕添加個人作品
- 🎨 享受沉浸式的藝術欣賞體驗

## 🔄 開發工作流程

### 分支策略
- `master` - 穩定版本，用於發布
- `develop` - 開發分支，功能整合
- `feature/*` - 功能開發分支
- `hotfix/*` - 緊急修復分支

### 開發流程
1. **創建功能分支**
   ```bash
   git checkout develop
   git checkout -b feature/new-feature
   ```

2. **開發和提交**
   ```bash
   git add .
   git commit -m "feat: 新增功能描述"
   ```

3. **合併到開發分支**
   ```bash
   git checkout develop
   git merge feature/new-feature
   ```

4. **發布新版本**
   ```bash
   ./scripts/release.sh v2.1.0 "新增搜索功能"
   ```

### 提交規範
使用 [Conventional Commits](https://www.conventionalcommits.org/) 格式：
- `feat`: 新功能
- `fix`: 錯誤修復  
- `docs`: 文檔更新
- `style`: 代碼格式
- `refactor`: 代碼重構
- `test`: 測試相關
- `chore`: 建置工具## 📁 專案結構

```
T7/
├── index.html              # 主頁面
├── styles.css              # 樣式文件
├── simple.js               # 主要邏輯
├── script.js               # 原始邏輯 (備份)
├── test.html               # 測試頁面
├── spec.md                 # 技術規格
├── PRD.md                  # 產品需求文檔
├── todolist.md             # 任務清單
├── report.md               # 專案報告
├── README.md               # 說明文件
├── CONTRIBUTING.md         # 貢獻指南
├── paintings-report.md     # 畫作收藏報告
├── upload-feature-guide.md # 上傳功能指南
└── scripts/
    └── release.sh          # 發布腳本
```

## 🛠️ 技術棧

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **存儲**: localStorage (瀏覽器本地存儲)
- **圖片處理**: FileReader API, Base64 編碼
- **樣式**: CSS Grid, Flexbox, CSS Variables
- **動畫**: CSS Transitions, Keyframes

## 📊 版本歷史

### v2.0.1 (當前版本)
- ✅ 完善專案文檔和 Git 工作流程
- ✅ 新增 PRD 和貢獻指南
- ✅ 建立分支管理策略

### v2.0.0
- ✅ 新增畫作上傳功能
- ✅ 35幅世界經典名畫收錄
- ✅ 科技感界面設計
- ✅ 本地存儲管理

### v1.0.0
- ✅ 基礎翻頁瀏覽功能
- ✅ 響應式設計
- ✅ 鍵盤導航支援

## 🤝 貢獻

歡迎貢獻！請閱讀 [CONTRIBUTING.md](CONTRIBUTING.md) 了解詳細的貢獻指南。

### 快速貢獻步驟
1. Fork 專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 授權

本專案採用 MIT 授權 - 詳見 [LICENSE](LICENSE) 文件

## 🙏 致謝

- 維基媒體共享資源提供的高品質名畫圖片
- 所有貢獻者和使用者的支持
- 開源社群的靈感和技術支援

## 📞 聯絡方式

- **專案倉庫**: [GitHub Repository](https://github.com/your-repo)
- **問題回報**: [Issue Tracker](https://github.com/your-repo/issues)
- **功能建議**: [Discussions](https://github.com/your-repo/discussions)

---

**用 ❤️ 和 ☕ 製作** | © 2024 世界名畫展示館