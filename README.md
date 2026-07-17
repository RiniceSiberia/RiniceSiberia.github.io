# 韩左券的个人作品集

面向 AI 与金融科技岗位的中文个人作品集，基于 Astro、React 与 Tailwind CSS 构建，使用 GitHub Pages 自动部署。

## 本地运行

需要 Node.js 22.12 或更高版本，以及 pnpm。

```bash
pnpm install
pnpm dev
```

正式检查与构建：

```bash
pnpm check
pnpm build
```

## 内容位置

个人信息、经历、项目与联系方式集中在 `src/data/resume.tsx`。网站设置位于 `src/data/config.ts`，页面视觉样式位于 `src/styles/global.css`。

头像与简历存放于 `public/profile/`。简历文件会由首页按钮直接打开。

## 部署

推送到 `RiniceSiberia/RiniceSiberia.github.io` 的主分支后，`.github/workflows/deploy.yml` 会构建并发布网站。默认访问地址为：

<https://rinicesiberia.github.io/>

## 来源与许可

项目最初基于开源模板 Starfolio 改造，模板采用 MIT License。现有页面结构、中文内容与视觉系统已针对本作品集重构。
