# 🚀 Vercel 部署指南

## 快速部署

### 方法一：通过 Vercel CLI（推荐）

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   cd /path/to/istp-a_os
   vercel
   ```

   首次部署时，Vercel 会询问一些问题：
   - `Set up and deploy "istp-a_os"?` → 选择 `Y`
   - `Which scope do you want to deploy to?` → 选择你的账号
   - `Link to existing project?` → 选择 `N`
   - `What's your project's name?` → 输入项目名称（如 `mbti-os`）
   - `In which directory is your code located?` → 直接回车（当前目录）

4. **等待部署完成**

   部署成功后，会显示你的网站地址，例如：
   ```
   🎉 Production: https://mbti-os.vercel.app
   ```

### 方法二：通过 GitHub + Vercel（自动部署）

1. **将代码推送到 GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **连接 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "Add New Project"
   - 选择 "Import Git Repository"
   - 选择你的 GitHub 仓库
   - 点击 "Import"

3. **配置项目**
   - Project Name: 输入项目名称
   - Framework Preset: 选择 "Other"
   - Root Directory: 保持默认（./）
   - Build Command: 留空
   - Output Directory: 留空
   - Install Command: 留空

4. **点击 Deploy**

   Vercel 会自动检测 `vercel.json` 并进行部署

## 文件结构说明

```
.
├── index.html       # 主页（选择页面）- Vercel 自动识别为入口
├── istp.html        # ISTP-A 系统页面
├── infp_os.html     # INFP 系统页面
├── vercel.json      # Vercel 配置文件（路由规则）
├── .gitignore       # Git 忽略文件
└── README.md        # 项目说明
```

## 访问路径

部署后，可以通过以下路径访问：

- **主页**: `https://your-domain.vercel.app/`
- **ISTP 系统**: `https://your-domain.vercel.app/istp` 或 `/istp.html`
- **INFP 系统**: `https://your-domain.vercel.app/infp` 或 `/infp_os.html`

## 自定义域名

1. 在 Vercel Dashboard 中打开项目
2. 点击 "Settings" → "Domains"
3. 添加自定义域名
4. 按照提示配置 DNS 记录

## 更新网站

### 使用 Vercel CLI
```bash
vercel --prod
```

### 使用 GitHub
只需推送代码到 GitHub，Vercel 会自动重新部署：
```bash
git add .
git commit -m "Update content"
git push origin main
```

## 环境变量（如需要）

在 Vercel Dashboard 中：
1. 打开项目
2. Settings → Environment Variables
3. 添加所需的环境变量

## 常见问题

### Q: 404 错误
**A**: 检查 `vercel.json` 文件是否存在，并确保路由配置正确。

### Q: 样式未加载
**A**: 确保所有 CSS 都内联在 HTML 文件中，或者静态资源路径正确。

### Q: 如何查看部署日志
**A**: 在 Vercel Dashboard 的 "Deployments" 标签中查看。

### Q: 如何回滚到之前的版本
**A**: 在 Vercel Dashboard 的 "Deployments" 中，找到之前的部署，点击 "Promote to Production"。

## 性能优化建议

1. **启用压缩**: Vercel 自动启用 Gzip/Brotli 压缩
2. **CDN 加速**: Vercel 自带全球 CDN
3. **图片优化**: 如有图片，使用 Vercel 的图片优化功能
4. **缓存策略**: 在 `vercel.json` 中配置缓存头

## 监控和分析

在 Vercel Dashboard 中可以查看：
- 访问量统计
- 性能指标
- 错误日志
- 部署历史

---

🎉 祝部署顺利！如有问题，请查看 [Vercel 官方文档](https://vercel.com/docs)
