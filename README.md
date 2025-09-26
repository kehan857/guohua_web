# 国华官网 - 家庭健康平台

一个基于 React + TypeScript + Vite 构建的现代化家庭健康管理平台。

## 功能特性

- 🏥 **健康自测** - 提供多种健康评估工具
- 🍎 **饮食推荐** - 根据个人情况提供营养建议
- 🛡️ **疾病预防** - 预防知识库和健康指导
- 🚨 **紧急指南** - 应急情况处理指南
- 👥 **专家团队** - 专业医疗团队介绍
- 📊 **成功案例** - 真实康复案例分享

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **路由管理**: React Router
- **动画效果**: Framer Motion
- **图标库**: Lucide React
- **数据库**: Supabase

## 本地开发

### 环境要求

- Node.js 18+
- npm 或 pnpm

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看应用。

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 部署

项目已配置 GitHub Pages 自动部署：

- 推送到 `master` 分支会自动触发构建和部署
- 部署完成后可通过 GitHub Pages 访问

## 项目结构

```
src/
├── components/          # 组件目录
│   ├── common/         # 通用组件
│   ├── features/       # 功能组件
│   └── ui/            # UI 组件
├── data/              # 数据文件
├── pages/             # 页面组件
├── types/             # TypeScript 类型定义
└── lib/               # 工具函数
```

## 许可证

MIT License
