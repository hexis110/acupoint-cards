# 针灸穴位记忆卡

A study app for the 202 acupoints in 《针灸穴位及取穴方法》. It covers 归经 and 定位 through flashcards, quizzes, fill-in-the-blank and written recall. It works offline and can be installed on iPad and Android.

## Deploy to GitHub Pages
1. Create a new repository on GitHub, for example `acupoint-cards`.
2. Upload every file in this folder to the repository root, including the `icons` folder and the hidden `.nojekyll` file.
3. In the repository, go to Settings → Pages. Under Source, choose "Deploy from a branch", then pick branch `main` and folder `/ (root)`. Save.
4. After a minute or two the site is live at `https://<your-username>.github.io/acupoint-cards/`.

## Install on a device (open the URL once while online)
- **iPad / iPhone:** open the URL in Safari → Share → "Add to Home Screen".
- **Android:** open the URL in Chrome → ⋮ menu → "Install app" (or "Add to Home screen").

After the first visit, the app opens with no internet connection.

## Updating the app
After changing `index.html`, also change `VERSION` in `sw.js` (for example, to today's date), then push. The next time the app is opened online, it downloads the new version, and the change takes effect the time after that.

## Study progress
Progress is saved on each device separately. On iPad, the home-screen app and Safari also keep separate progress. To move progress to another device, go to the 骨度分寸 tab → 导出进度 / 导入进度.
