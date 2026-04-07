# Vercel Deployment Guide for DSZ

## Pre-Deployment Checklist

- [ ] All environment variables are configured in `.env.local`
- [ ] API keys are NOT committed to git (verify `.gitignore`)
- [ ] Project builds successfully: `npm run build`
- [ ] No console errors or warnings
- [ ] Firebase connection is working
- [ ] All pages load correctly in production mode: `npm run preview`

## Deployment Steps

### Step 1: Prepare Your Code

```bash
# Install dependencies
npm install

# Test the build locally
npm run build
npm run preview

# Verify no sensitive data in git
git status  # Check .env.local is not listed
```

### Step 2: Verify .gitignore

Ensure `.gitignore` contains:
```
.env
.env.local
.env.*.local
```

### Step 3: Commit and Push

```bash
# Add all files (except ignored)
git add .

# Commit the conversion
git commit -m "Convert DSZ to React + Vite with secure environment setup"

# Push to GitHub
git push origin main
```

### Step 4: Connect to Vercel

1. Visit [vercel.com/new](https://vercel.com/new)
2. Click "Continue with GitHub"
3. Search for your `dsz` repository
4. Click "Import"
5. Vercel will detect Vite configuration automatically

### Step 5: Configure Environment Variables

In the Vercel import screen, under "Environment Variables":

Add the following (copy from your `.env.local`):



> ⚠️ **IMPORTANT**: These values will be encrypted by Vercel. They won't be visible in your git repository.

### Step 6: Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 2-3 minutes)
3. Vercel will provide you with a deployment URL
4. Your site is now live! 🎉

## Production Verification

After deployment, verify:

1. ✅ Site loads without SSL errors
2. ✅ All pages are accessible
3. ✅ Theme switching works
4. ✅ Firebase connection is active
5. ✅ No environment variables leaked in browser console
6. ✅ API calls are working

### Check for Leaked Variables

Open browser DevTools (F12) and in Console run:
```javascript
// Should NOT show API keys
console.log(process.env)
```

Your Firebase config will use `import.meta.env.VITE_*` which is safely bundled.

## Setting Up Custom Domain (Optional)

1. In Vercel → Project Settings → Domains
2. Add your custom domain
3. Update your domain's DNS records (Vercel will provide instructions)
4. Vercel handles SSL automatically

## Continuous Deployment

After initial setup:
- Every push to `main` branch will trigger automatic deployment
- Pull requests get preview deployments
- You can rollback to previous versions anytime

## Troubleshooting

### Build fails with "environment variable not found"
- Verify all `VITE_FIREBASE_*` variables are set in Vercel
- Check variable names match exactly

### Firebase connection not working
- Verify Firebase credentials are correct
- Check Firebase project permissions
- Ensure Firestore is enabled in Firebase console

### Blank page or 404 errors
- Verify `vite.config.js` is correct
- Check build output: `npm run build` locally
- Review Vercel build logs

### API keys visible in production
- Check that `.env.local` wasn't accidentally committed
- Verify using `git log --all --full-history -- .env.local`
- If leaked, regenerate Firebase keys immediately

## Rolling Back

If something goes wrong:

1. Go to Vercel → Deployments
2. Find previous working deployment
3. Click the three dots → "Redeploy"

## Monitoring

Set up Vercel Analytics (free):
1. Vercel Dashboard → Project → Settings → Analytics
2. Enable "Web Vitals"
3. Monitor performance metrics

## Updating After Deployment

For future updates:

```bash
# Make your changes locally
git add .
git commit -m "Your changes"
git push origin main

# Vercel automatically deploys within seconds
```

## Security Best Practices

1. ✅ Never commit `.env.local` to git
2. ✅ Use Vercel environment variables for production secrets
3. ✅ Regenerate Firebase keys if compromised
4. ✅ Enable Firebase security rules for Firestore
5. ✅ Configure Firebase cross-origin settings
6. ✅ Monitor Firebase usage for abuse

## Support Links

- [Vercel Status](https://www.vercel-status.com/)
- [Firebase Console](https://console.firebase.google.com/)
- [GitHub Repository](https://github.com/Jeet-Pathak/dsz)

---

**After successful deployment, share your Vercel URL with the team!**

For questions, contact the DSZ admin team or check Vercel documentation.
