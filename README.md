# Material UI 中文站 🇨🇳

[![Deploy to GitHub Pages](https://github.com/bbylw/material-ui-cn/actions/workflows/deploy.yml/badge.svg)](https://github.com/bbylw/material-ui-cn/actions/workflows/deploy.yml) [![Pages](https://img.shields.io/badge/Pages-material--ui.ndjp.net-141413?logo=github)](https://material-ui.ndjp.net) [![Bun](https://img.shields.io/badge/Bun-1.4-black?logo=bun)](https://bun.sh) [![MUI](https://img.shields.io/badge/MUI-9.4.0-007FFF?logo=mui)](https://mui.com)

> 基于 [mui.com/material-ui](https://mui.com/material-ui/getting-started/) 官方文档的中文落地站  
> 技术栈：**React 19 + TypeScript + Vite 8 + Bun + MUI 9.4.0 + Framer Motion 13**  
> 风格：Editorial · 非对称 Bento · 纸质暖色系 · 深浅色全适配

在线预览：**https://material-ui.ndjp.net** · 源码：`https://github.com/bbylw/material-ui-cn` · 最后部署：2026-08-28

## 特性

- 完整汉化官方 Getting Started：概览、安装、用法、组件、示例项目、模板、FAQ
- 90+ 组件实时可交互演示（Button / TextField / Slider / Rating 等）
- 深浅色主题无缝切换（`useColorScheme` + CSS Variables，`prefers-reduced-motion` 适配）
- Bun 首选安装、一键复制代码块、语义化分区与锚点导航

## 本地开发

```bash
bun install
bun run dev      # http://localhost:5173
bun run build    # tsc + vite build -> dist
bun run preview
```

## 部署

- 推送至 `master` 自动触发 GitHub Actions 构建并发布到 GitHub Pages
- 自定义域 `material-ui.ndjp.net` 通过 `public/CNAME` 与 Pages 设置同步，HTTPS 自动签发
- 工作流见 `.github/workflows/deploy.yml`

## 目录

```
src/
  theme.ts                 # Editorial 调色与排版令牌
  components/CodeBlock.tsx # 深色代码块
  sections/                # Hero / Intro / Advantages / Installation / Usage / ComponentShowcase / ProjectsAndTemplates / Faq / StartNow / Header / Footer
```

## 许可

演示项目，内容参考 mui.com 官方文档，遵循 upstream [MIT](https://github.com/mui/material-ui/blob/master/LICENSE)。
