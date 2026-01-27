# shop-uni-scaffold

UniApp 商城项目脚手架（Vue3 + TypeScript + Pinia）

特性
- 📦 开箱即用：集成布局、Tabbar、请求封装、状态管理（Pinia）等核心能力
- 🎯 类型安全：使用 TypeScript 完成类型声明
- 🎨 样式规范：统一主题变量、通用工具类、多端适配（SCSS）
- 🚀 工程化：ESLint + Prettier，Vite + uni-app 插件

快速开始

1. 克隆项目

```bash
git clone https://github.com/icsmper/shop-uni-scaffold.git
cd shop-uni-scaffold
```

2. 安装依赖

```bash
npm install
# 或者使用 pnpm/yarn
```

3. 本地运行（开发模式）

```bash
npm run dev
# 根据平台使用 uni-app 编译或 HBuilderX 打包运行
```

4. 构建（生产）

```bash
npm run build
```

项目结构（简要）

- src/
  - api/            请求封装与 API 模块
  - components/     可复用组件
  - pages/          页面目录
  - store/          Pinia 状态管理
  - assets/         静态资源与样式
  - hooks/          复用 Hook
  - utils/          工具函数
  - types/          全局类型声明

贡献
- 欢迎提交 Issue 与 PR。请遵循代码风格（ESLint/Prettier）并提供清晰的描述和复现步��。

License
- MIT
