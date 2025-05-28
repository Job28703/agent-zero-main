# 世界名畫展示館 - 技術規格文件

## 📋 專案概述

### 專案名稱
世界名畫展示館 (World Famous Paintings Gallery)

### 專案描述
一個具有科技感的互動式世界名畫瀏覽應用，支援翻頁瀏覽、畫作上傳、收藏管理等功能。

### 版本信息
- **當前版本**: v2.0.0
- **開發日期**: 2024年12月
- **最後更新**: 2024年12月

## 🎯 功能需求

### 核心功能
1. **畫作瀏覽**
   - 翻頁式瀏覽體驗
   - 35幅世界經典名畫
   - 科技感視覺效果
   - 響應式設計

2. **畫作上傳**
   - 支援圖片上傳 (JPG/PNG/GIF)
   - 拖拽上傳功能
   - 畫作信息編輯
   - 本地存儲管理

3. **導航控制**
   - 翻頁按鈕控制
   - 鍵盤快捷鍵 (左右箭頭)
   - 頁面信息顯示
   - 進度指示器

### 擴展功能
1. **收藏系統** (預留)
2. **分享功能** (預留)
3. **全螢幕模式** (預留)
4. **設定選項** (預留)

## 🏗️ 系統架構

### 前端架構
```
世界名畫展示館
├── 展示層 (Presentation Layer)
│   ├── HTML 結構
│   ├── CSS 樣式
│   └── 用戶界面組件
├── 邏輯層 (Logic Layer)
│   ├── 翻頁控制邏輯
│   ├── 上傳處理邏輯
│   └── 數據管理邏輯
└── 數據層 (Data Layer)
    ├── 靜態畫作數據
    ├── 用戶上傳數據
    └── 本地存儲管理
```

### 技術棧
- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **存儲**: localStorage (瀏覽器本地存儲)
- **圖片處理**: FileReader API, Base64 編碼
- **樣式**: CSS Grid, Flexbox, CSS Variables
- **動畫**: CSS Transitions, Keyframes## 📊 數據結構

### 畫作數據模型
```javascript
{
  title: String,           // 畫作標題 (必填)
  artist: String,          // 藝術家姓名 (必填)
  year: String,            // 創作年份
  image: String,           // 圖片 URL 或 Base64
  description: String,     // 作品描述
  style: String,           // 藝術風格
  isUserUploaded: Boolean, // 是否為用戶上傳
  uploadDate: String       // 上傳日期 (ISO格式)
}
```

### 存儲結構
```javascript
// localStorage 鍵值
{
  "userPaintings": [       // 用戶上傳的畫作陣列
    {畫作對象1},
    {畫作對象2},
    ...
  ]
}
```

## 🎨 用戶界面設計

### 設計風格
- **主題**: 科技感、未來感
- **色彩**: 深色背景 + 霓虹色彩
- **字體**: 現代無襯線字體
- **效果**: 玻璃擬態、發光效果、漸變

### 色彩規範
```css
:root {
  --primary-bg: #0a0a0a;           /* 主背景色 */
  --secondary-bg: #1a1a2e;        /* 次要背景色 */
  --accent-bg: #16213e;           /* 強調背景色 */
  --glass-bg: rgba(255,255,255,0.05); /* 玻璃效果 */
  --glass-border: rgba(255,255,255,0.1); /* 玻璃邊框 */
  --neon-blue: #00d4ff;           /* 霓虹藍 */
  --neon-green: #00ff88;          /* 霓虹綠 */
  --neon-purple: #8b5cf6;         /* 霓虹紫 */
  --text-primary: #ffffff;         /* 主要文字 */
  --text-secondary: #b0b0b0;       /* 次要文字 */
}
```

### 響應式斷點
- **桌面**: ≥ 1024px
- **平板**: 768px - 1023px
- **手機**: < 768px

## 🔧 技術實現

### 核心模組

#### 1. 翻頁系統
```javascript
// 主要函數
- generatePaintingPages()    // 生成畫作頁面
- updateDisplay()           // 更新顯示狀態
- nextPage() / previousPage() // 翻頁控制
```

#### 2. 上傳系統
```javascript
// 主要函數
- initUploadFeature()       // 初始化上傳功能
- processSelectedFile()     // 處理選中文件
- handleUploadConfirm()     // 確認上傳處理
```