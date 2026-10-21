# 针灸穴位记忆卡

A study app for 《针灸学》Ⅰ. It works offline and can be installed on iPad and Android.

- **腧穴:** 202 points from 《针灸穴位及取穴方法》, each with 定位, 操作 and 取穴步骤, plus 主治 from the 十四五 slides. Includes flashcards, quizzes (归经 / 定位 / 主治), number fill-ins, and written recall of 定位 + 操作. The 作业10穴 filter covers just the 10 points in the homework.
- **特定穴:** tables for 五输穴, 原穴, 络穴, 郄穴, 背俞穴, 募穴, 下合穴, 八会穴 and 八脉交会穴, with hide-and-reveal practice and randomly generated questions.
- **刺灸操作:** practice for the 操作叙述题 (针刺异常情况, 施灸 / 拔罐 / 三棱针 / 皮肤针 / 电针注意事项, 消毒, 宜忌), with section-by-section recall and written comparison.
- **习题:** the 50 questions from the Ⅰ homework plus 24 Ⅰ-scope questions from the 重修班 homework, with answers, explanations and a wrong-answer list (错题本).

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
