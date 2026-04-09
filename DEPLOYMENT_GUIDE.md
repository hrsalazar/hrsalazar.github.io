# 🚀 Deployment Guide to Netlify

## Prerequisites
- GitHub account (free)
- Netlify account (free at netlify.com)
- Git installed on your machine

---

## Step 1: Push Your Project to GitHub

### 1.1 Initialize Git (if not already done)
```bash
cd hrsalazar.github.io
git init
git add .
git commit -m "Initial commit: Portfolio with modern timeline and professional design"
```

### 1.2 Create a GitHub Repository
1. Go to [GitHub](https://github.com/new)
2. Create a **new repository** named `portfolio` (or any name)
3. **Do NOT** initialize with README (we already have files)
4. Click "Create repository"

### 1.3 Push to GitHub
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## Step 2: Deploy to Netlify

### Option A: Connect Directly from GitHub (Recommended)

1. **Sign up/Log in to Netlify**
   - Visit https://netlify.com
   - Click "Sign up" or "Log in"
   - Choose "GitHub" for authentication

2. **Connect Your Repository**
   - Click "Add new site" → "Import an existing project"
   - Select "GitHub"
   - Authorize Netlify to access your GitHub account
   - Select your `portfolio` repository

3. **Configure Build Settings**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Click "Deploy site"

4. **Wait for Deployment**
   - Netlify will automatically build and deploy
   - You'll get a unique URL like `https://your-site-12345.netlify.app`

### Option B: Deploy Using Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build Your Project**
   ```bash
   cd hrsalazar.github.io
   npm run build
   ```

3. **Deploy to Netlify**
   ```bash
   netlify deploy --prod --dir=dist
   ```

4. **Follow the prompts**
   - Log in with your Netlify account
   - Authorize if asked
   - Deployment will begin automatically

---

## Step 3: Custom Domain (Optional)

1. **In Netlify Dashboard**
   - Go to your site settings
   - Click "Domain settings"
   - Click "Add custom domain"
   - Enter your domain (e.g., `hrsalazar.com`)

2. **Update Your Domain Registrar**
   - Netlify will show you DNS records to add
   - Add them to your domain registrar (GoDaddy, Namecheap, etc.)
   - Wait 24-48 hours for DNS propagation

3. **Enable HTTPS**
   - Netlify automatically provides SSL certificate
   - It's always enabled and free

---

## Step 4: Continuous Deployment (Auto-Deploy on Git Push)

Your site is now automatically deployed every time you push to GitHub!

### To make changes:

```bash
# 1. Make changes to your files
# 2. Commit changes
git add .
git commit -m "Updated portfolio styling"

# 3. Push to GitHub
git push

# 4. Netlify automatically builds and deploys! 🎉
```

---

## Environment Variables (if needed)

If your app uses API keys or environment variables:

1. In Netlify Dashboard
2. Go to **Site settings** → **Build & deploy** → **Environment**
3. Click "Edit variables"
4. Add your environment variables
5. Redeploy

---

## Build & Deploy Commands Reference

```bash
# Local development
npm run dev          # Start dev server at localhost:5173

# Build for production
npm run build        # Creates optimized dist/ folder

# Preview production build locally
npm run preview      # Test the production build locally

# Deploy to Netlify (if using CLI)
netlify deploy --prod
```

---

## Troubleshooting

### Build Fails with "Module not found"
```bash
cd hrsalazar.github.io
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push
```

### Site shows 404 errors
- Make sure `netlify.toml` is in root directory ✓ (already created)
- The redirect rule handles React routing ✓ (already configured)

### Site is blank/white page
- Check browser console for errors (F12 → Console tab)
- Check Netlify deploy logs for build errors
- Try `npm run build` locally to debug

### Want to rollback to previous version
- Netlify keeps deployment history
- In Dashboard → "Deploys" tab
- Click any previous deploy and select "Publish deploy"

---

## Performance Tips

1. **Optimize Images** - Use WebP format
2. **Enable Gzip** - Already done by Netlify
3. **Cache Headers** - Already configured in netlify.toml
4. **Code Splitting** - Vite does this automatically

---

## What's Next?

✅ Your site is live!

- Share your URL with recruiters
- Update your resume with the portfolio link
- Keep the GitHub repo updated with new projects
- Monitor site performance in Netlify Analytics

---

## Quick Links

- 🔗 Netlify Dashboard: https://app.netlify.com
- 📚 Netlify Docs: https://docs.netlify.com
- ⚡ Vite Docs: https://vitejs.dev
- 🎨 Your Portfolio: [Check Netlify Dashboard]

---

## Need Help?

- Netlify Support: https://support.netlify.com
- Community: https://answers.netlify.com
- This project: Check the GitHub repo

---

Good luck with your deployment! 🚀
