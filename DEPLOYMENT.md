# Deployment Guide

## Deploying to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Steps:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Set Environment Variables** (if needed)
   - Go to Vercel Dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Add your variables

### Alternative: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"

---

## Deploying to Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

---

## Deploying to AWS

### Using AWS Amplify:

1. Connect your GitHub repository to AWS Amplify
2. Amplify will automatically detect Next.js
3. Configure build settings
4. Deploy

---

## Environment Variables

Create a `.env.local` file for local development:

```
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_CONTACT_EMAIL=your_email@gmail.com
API_SECRET_KEY=your_secret_key
```

---

## Custom Domain

### On Vercel:
1. Go to Project Settings
2. Click Domains
3. Add your custom domain
4. Update DNS records

---

## Performance Optimization

- Enable Image Optimization
- Use Next.js ISR (Incremental Static Regeneration)
- Enable Compression
- Set Cache Headers

---

## Monitoring & Analytics

- Enable Vercel Analytics
- Set up error tracking with Sentry
- Monitor performance metrics

---

**Your portfolio is now live! 🚀**
