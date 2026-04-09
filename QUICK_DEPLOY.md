# ⚡ Quick Deploy to Netlify

## TL;DR - 5 Minute Deploy

### 1️⃣ Prerequisites (Do This First)
- [Sign up for Netlify](https://netlify.com) (free)
- [Create GitHub account](https://github.com) (free)
- [Install Git](https://git-scm.com)

### 2️⃣ Push to GitHub
```bash
cd hrsalazar.github.io

# Initialize git repo (one time only)
git init
git add .
git commit -m "Portfolio - Timeline Modal & Professional Design"

# Create repo on GitHub, then run:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 3️⃣ Deploy via Netlify Dashboard (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **GitHub** and authorize
4. Select your `portfolio` repository
5. Build settings auto-fill:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **"Deploy site"**
7. **Done!** 🎉 Your site is live in 1-2 minutes

### 4️⃣ Get Your Live URL
- Check your Netlify dashboard
- You'll see: `https://your-site-12345.netlify.app`
- Share it with recruiters! 🚀

---

## Alternative: Deploy via CLI (Advanced)

```bash
# Install Netlify CLI (one time)
npm install -g netlify-cli

# Build & deploy
cd hrsalazar.github.io
npm run build
netlify deploy --prod --dir=dist

# That's it!
```

---

## Make Updates (It's Automatic!)

```bash
# 1. Edit your files
# 2. Commit & push
git add .
git commit -m "Updated experience"
git push

# Netlify automatically rebuilds and deploys! ✨
# No manual steps needed
```

---

## Custom Domain (Optional)

1. Register domain (GoDaddy, Namecheap, etc.)
2. In Netlify Dashboard → "Domain settings" → "Add custom domain"
3. Follow DNS update instructions
4. **HTTPS is free and automatic** ✓

---

## Verify It Works

- Open your Netlify URL
- Click timeline items → Modal should open ✓
- Try "View Details" → Full description appears ✓
- Test on mobile → Responsive layout ✓

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Run `npm install` locally, then `npm run build` |
| Site is blank | Check browser console (F12) for errors |
| 404 errors | Already fixed by `netlify.toml` config ✓ |
| Want to rollback | Netlify "Deploys" tab → Click previous version |

---

## Next Steps

✅ **You're live!** Now:
- [ ] Test your site thoroughly
- [ ] Share URL on LinkedIn/Resume
- [ ] Set up custom domain (optional)
- [ ] Monitor analytics in Netlify dashboard
- [ ] Keep GitHub repo updated with new projects

---

## Key Files

- `netlify.toml` - Deployment config ✓
- `vite.config.js` - Build config ✓
- `package.json` - Dependencies ✓
- `dist/` - Production build (auto-generated)

---

## Need Help?

- 📚 [Netlify Docs](https://docs.netlify.com)
- 💬 [Netlify Support](https://support.netlify.com)
- 🆘 [Community Help](https://answers.netlify.com)

---

## Performance

Your site will automatically get:
- ✅ Global CDN (fast worldwide)
- ✅ HTTPS/SSL (free)
- ✅ Gzip compression (automatic)
- ✅ HTTP/2 (automatic)
- ✅ DDoS protection (automatic)

**Go live now! 🚀**
