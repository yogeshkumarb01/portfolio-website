# 🚀 Deploy Your Portfolio to Vercel

This guide will help you deploy your portfolio website to Vercel and get a live web link.

## 📋 Prerequisites

- GitHub account
- Vercel account (free)
- Node.js installed locally (for testing)

## 🛠️ Local Testing (Optional)

Before deploying, you can test locally:

```bash
cd portfolio-standalone
npm install
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

## 🌐 Deploy to Vercel

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Initialize git and push your code:

```bash
cd portfolio-standalone
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import your GitHub repository
4. Click **"Deploy"**

Vercel will automatically:
- Detect it's a Next.js project
- Install dependencies
- Build the project
- Deploy to a live URL

### Step 3: Get Your Live Link

After deployment, Vercel will provide you with:
- **Production URL**: `https://your-project-name.vercel.app`
- **Custom Domain**: You can add your own domain later

## 🔧 Configuration

### Environment Variables
No environment variables needed for basic deployment.

### Build Settings
Vercel automatically detects:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## 📱 Custom Domain (Optional)

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Add your custom domain
3. Update DNS records as instructed
4. Your portfolio will be available at `yourdomain.com`

## 🔄 Updates

To update your live portfolio:

1. Make changes to your code
2. Push to GitHub: `git push origin main`
3. Vercel automatically redeploys

## 📊 Performance

Vercel provides:
- Global CDN
- Automatic HTTPS
- Edge functions
- Analytics dashboard

## 🆘 Troubleshooting

### Build Errors
- Check if all dependencies are in `package.json`
- Ensure Node.js version compatibility
- Check console logs in Vercel dashboard

### 404 Errors
- Verify file paths in your code
- Check if `next.config.ts` is properly configured

## 🎉 Success!

Your portfolio is now live and accessible worldwide! Share the link with potential employers, clients, or on your resume.

---

**Need help?** Check Vercel's [documentation](https://vercel.com/docs) or [community forums](https://github.com/vercel/vercel/discussions). 