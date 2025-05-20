# Vercel Deployment Guide

This document provides instructions for deploying this Next.js project to Vercel.

## Prerequisites

- A Vercel account (you can sign up at [vercel.com](https://vercel.com))
- Git installed on your machine

## Deployment Steps

### Option 1: Deploy with Vercel CLI

1. Install the Vercel CLI globally (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. Login to your Vercel account:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your deployment.

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).

2. Log in to your Vercel account and click "New Project".

3. Import your repository.

4. Configure the project settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

5. Configure environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`: `h6zht0xd`
   - `NEXT_PUBLIC_SANITY_DATASET`: `production`
   - `NEXT_PUBLIC_SANITY_API_VERSION`: `2021-06-07`

6. Click "Deploy" to start the deployment process.

## Post-Deployment

After deployment, you should:

1. Verify that all pages and functionality work correctly.

2. Set up a custom domain (if needed) in the Vercel dashboard.

3. Configure any additional settings like:
   - Analytics
   - Performance monitoring
   - Edge functions (if used)

## Troubleshooting

If you encounter issues during deployment:

1. Check the build logs in the Vercel dashboard.

2. Ensure all required environment variables are correctly set.

3. Verify that your project builds successfully locally with `npm run build`.

4. If using API routes, ensure they're compatible with serverless functions.

## Updating Your Deployment

Any push to the main branch of your connected repository will trigger a new deployment automatically.

To deploy changes from a different branch:
```bash
vercel --prod
```

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Sanity + Next.js Deployment Guide](https://www.sanity.io/guides/nextjs-deployment-vercel) 