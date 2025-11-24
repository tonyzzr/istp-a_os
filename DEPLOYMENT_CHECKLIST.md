# ✅ Vercel 部署检查清单

## 文件准备 ✓

- [x] `index.html` - 主页入口（选择页面）
- [x] `istp.html` - ISTP-A 系统完整手册
- [x] `infp_os.html` - INFP 系统完整手册
- [x] `vercel.json` - Vercel 配置文件
- [x] `.gitignore` - Git 忽略规则
- [x] `README.md` - 项目说明文档
- [x] `DEPLOYMENT.md` - 部署指南
- [x] `CLAUDE.md` - Claude Code 说明

## 链接检查 ✓

- [x] 主页 → ISTP 系统链接正确 (`istp.html`)
- [x] 主页 → INFP 系统链接正确 (`infp_os.html`)
- [x] 页脚链接正确
- [x] 键盘快捷键配置正确

## 部署步骤

### 快速开始

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录**
   ```bash
   vercel login
   ```

3. **部署**
   ```bash
   vercel
   ```

4. **生产环境部署**
   ```bash
   vercel --prod
   ```

### 预期输出

```
🔍  Inspect: https://vercel.com/your-username/project-name/xxxxx
✅  Production: https://your-project.vercel.app [copied to clipboard]
```

## 验证部署

部署完成后，访问以下 URL 进行测试：

- [ ] `https://your-domain.vercel.app/` - 主页加载正常
- [ ] 点击 ISTP-A 面板跳转正常
- [ ] 点击 INFP 面板跳转正常
- [ ] 侧边栏导航功能正常
- [ ] 响应式设计在移动端显示正常
- [ ] 键盘快捷键（1/2）工作正常

## 可选配置

### 自定义域名
1. 在 Vercel Dashboard 添加域名
2. 配置 DNS 记录（Vercel 会提供）
3. 等待 SSL 证书生成

### 环境变量（如需要）
```bash
vercel env add VARIABLE_NAME
```

### 性能优化
- Vercel 自动启用 Gzip/Brotli 压缩 ✓
- 全球 CDN 分发 ✓
- HTTP/2 支持 ✓
- 自动 HTTPS ✓

## 故障排除

如果遇到问题：

1. 检查 Vercel 部署日志
2. 确认 `vercel.json` 格式正确
3. 验证所有 HTML 文件路径
4. 清除浏览器缓存后重试

## 支持资源

- [Vercel 官方文档](https://vercel.com/docs)
- [部署日志查看](https://vercel.com/dashboard)
- 项目 README.md
- 项目 DEPLOYMENT.md

---

准备就绪！🚀 执行 `vercel` 开始部署
