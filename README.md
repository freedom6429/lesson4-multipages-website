# 網頁切版直播班 Vite 範例

## Node.js 版本

- 專案的 Node.js 版本需為 v18 以上
- 查看自己版本指令：`node -v`

## 指令列表

- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm run deploy` - 自動化部署

## 資料夾結構

- assets # 靜態資源放置處
  - images # 圖片放置處
  - scss # SCSS 的樣式放置處

- layout # ejs 模板放置處
- pages # 頁面放置處

- JavaScript 程式碼可寫在 main.js 檔案

### 注意事項

- 已將 pages 資料夾內的 index.html 預設為首頁，建議不要任意修改 index.html 的檔案名稱
- .gitignore 檔案是用來忽略掉不該上傳到 GitHub 的檔案（例如 node_modules），請不要移除 .gitignore

## 開發模式的監聽

vite 專案執行開發模式 `npm run dev` 後即會自動監聽，不需要使用 `Live Sass Compiler` 的 `Watch SCSS` 功能

## 部署 gh-pages 流程說明

### Windows 版本

1. 在 GitHub 建立一個新的 Repository

2. 部署前請務必先將原始碼上傳到 GitHub Repository 也就是初始化 GitHub，因此通常第一步驟會在專案終端機輸入以下指令

```cmd
git init # 若已經初始化過就可以不用輸入
git add .
git commit -m 'first commit'
git branch -M main
git remote add origin [GitHub Repositories Url]
git push -u origin main // 僅限第一次輸入，往後只需要輸入 git push
```

3. 初始化完畢後，執行 `npm run deploy` 指令進行自動化部署

### 作業繳交紀錄

7/28 初稿

7/31 修改紀錄

1. 將桌面版container寬度改為1320px，並加上水平padding:12px。
2. 選擇器階層縮減至四層以下。
3. 斷點做成mixin，用include方式分散到各區塊。
4. 修正登入頁的icon大小。
5. 調整scss結構，增加common.scss收納共同樣式，再於各頁面的入口檔js中import共同樣式、元件以及分頁樣式
6. img標籤統一由base.scss定義為max-width: 100%。
7. breadcrumb tag改為語意化標籤nav。
8. index.html修正新品上市全部卡片都放進同一個ul中。
9. index.html增加桌面版聯名企劃區塊星星和火花的裝飾並調整位置。
10. index.html修正依系列選購的卡片不等寬問題。
11. 增加JS確認每頁mobile版沒有出現X軸滾動條。
