# 🚀 快速部署到 Vercel

## 三步部署

### 1️⃣ 安装 Vercel CLI
```bash
npm install -g vercel
```

### 2️⃣ 登录 Vercel
```bash
vercel login
```
在浏览器中完成登录。

### 3️⃣ 部署项目
```bash
vercel
```

首次部署会询问几个问题，全部按回车使用默认值即可！

## ✅ 部署完成

成功后会显示：
```
✅  Production: https://your-project.vercel.app
```

## 🌐 访问你的网站

- **主页**: `https://your-project.vercel.app/`
- **ISTP 系统**: `https://your-project.vercel.app/istp`
- **INFP 系统**: `https://your-project.vercel.app/infp`

## 🔄 更新网站

只需再次运行：
```bash
vercel --prod
```

## 📱 测试清单

- [ ] 主页加载正常
- [ ] 点击 ISTP 面板能跳转
- [ ] 点击 INFP 面板能跳转
- [ ] 侧边栏导航正常
- [ ] 手机访问正常

---

就这么简单！🎉

需要帮助？查看 [DEPLOYMENT.md](DEPLOYMENT.md) 获取详细说明。
