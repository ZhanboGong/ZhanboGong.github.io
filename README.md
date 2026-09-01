# 双语个人网站模板

这是一个可以直接上传到 GitHub Pages 的简洁静态个人简历。默认显示英文，点击右上角的“中文”可以切换中文。页面采用传统简历排版，没有动画和复杂装饰。

## 你只需要修改这些内容

### 1. 填写个人资料

用文本编辑器打开 `content.js`，把示例文字替换成你自己的信息。所有英文和中文内容都集中在这个文件中。

- `en` 后面填写英文。
- `zh` 后面填写中文。
- 没有链接时保留空引号 `""`。
- 请不要删除逗号、引号和括号。

### 2. 更换个人照片

当前照片是 `assets/profile.jpg`。以后需要更换时，用新的照片覆盖这个文件即可。建议使用竖版照片，文件最好小于 1 MB。

### 3. 添加 PDF 简历

把 PDF 放入 `assets` 文件夹，命名为 `resume.pdf`。然后把：

```js
resumeUrl: "",
```

改为：

```js
resumeUrl: "assets/resume.pdf",
```

网站上的“下载简历”按钮会自动出现。

### 4. 更新 GitHub Pages

进入你的 `ZhanboGong.github.io` 仓库，选择 **Add file → Upload files**，上传本文件夹中的全部内容并提交。保持文件结构不变：

```text
index.html
styles.css
content.js
script.js
assets/
  profile.jpg       （个人照片）
  resume.pdf        （添加简历后）
```

上传后等待约 1–5 分钟，刷新 `https://zhanbogong.github.io`。

## 隐私提示

个人网站是公开的。建议不要展示详细住址、身份证件信息或不希望公开的电话号码。
