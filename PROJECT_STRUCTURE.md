# 📁 项目结构

```
istp-a_os/
│
├── 📄 核心页面
│   ├── index.html              # 🏠 主页入口（选择页面）
│   ├── istp.html               # 🔧 ISTP-A 行为操作系统完整手册
│   └── infp_os.html            # 🌸 INFP 行为操作系统完整手册
│
├── ⚙️ 配置文件
│   ├── vercel.json             # Vercel 部署配置（路由规则）
│   └── .gitignore              # Git 忽略文件
│
├── 📚 文档
│   ├── README.md               # 项目说明
│   ├── CLAUDE.md               # Claude Code 指引
│   ├── DEPLOYMENT.md           # 详细部署指南
│   └── DEPLOYMENT_CHECKLIST.md # 部署检查清单
│
├── 📖 原始文档（参考）
│   ├── ISTP-A_Manual_v3_full.pdf
│   └── INFP_OS_Final.pdf
│
└── 🗂️ 其他
    └── mdx/                    # Markdown 扩展文件夹（可选）
```

## 🔗 页面关系图

```
┌─────────────────────┐
│   index.html       │  ← Vercel 自动入口
│   (主选择页面)      │
└──────────┬──────────┘
           │
           ├─────────────────┐
           │                 │
           ▼                 ▼
┌──────────────────┐  ┌──────────────────┐
│   istp.html     │  │  infp_os.html   │
│  (ISTP-A 系统)  │  │  (INFP 系统)    │
└──────────────────┘  └──────────────────┘
```

## 🌐 URL 映射

| 文件 | 直接访问 | 简化 URL (通过 vercel.json) |
|------|---------|---------------------------|
| index.html | `/index.html` | `/` |
| istp.html | `/istp.html` | `/istp` |
| infp_os.html | `/infp_os.html` | `/infp` |

## 📊 文件大小

| 文件 | 大小 | 说明 |
|------|------|------|
| index.html | ~12KB | 主页，包含选择界面 |
| istp.html | ~41KB | ISTP-A 完整手册 |
| infp_os.html | ~27KB | INFP 完整手册 |
| vercel.json | <1KB | 配置文件 |

## 🎨 设计特点

### index.html（主页）
- 渐变背景（紫色系）
- 两个可点击面板
- 3D 悬停效果
- 键盘导航（1/2 快捷键）
- 响应式布局

### istp.html
- 蓝色主题（#3498db）
- 固定侧边栏导航
- 6 个完整案例
- 框架流程图
- 打印友好

### infp_os.html
- 紫绿主题（#6b5b95, #88b04b）
- 温柔配色
- 情绪驱动设计
- 3 个实战案例
- 打印友好

## 🚀 部署流程

1. **准备**: 所有文件就绪 ✓
2. **命令**: `vercel` 或推送到 GitHub
3. **验证**: 访问生成的 URL
4. **优化**: 配置自定义域名（可选）

## 📝 维护说明

### 更新内容
1. 编辑对应的 HTML 文件
2. 提交到 Git: `git commit -am "Update content"`
3. 推送: `git push`
4. Vercel 自动重新部署

### 添加新页面
1. 创建新的 HTML 文件
2. 在 `vercel.json` 添加路由
3. 在 `index.html` 添加入口链接
4. 部署更新

---

📦 项目已优化完毕，可以直接部署到 Vercel！
