# Sanity Studio Guide for Dempsey Portfolio

## Accessing your content

There are a few ways to access and manage your Sanity content:

### 1. Use the Sanity.io web interface (Recommended)

The most reliable way to manage your content is through the Sanity.io web interface:

1. Go to: https://www.sanity.io/manage/project/h6zht0xd
2. Log in with your credentials
3. Select the "Content" tab to edit your content

### 2. Run the standalone studio

We've created a simple standalone studio that bypasses the Next.js integration issues:

```bash
# Start the standalone studio
npm run sanity
```

Then open http://localhost:3333 in your browser.

### 3. Use the Sanity CLI

You can also use the Sanity CLI to manage your content:

```bash
# Log in to Sanity
npm run sanity:login

# Open the Sanity project management interface
npm run sanity:manage
```

## Troubleshooting

If you're experiencing issues with the Sanity Studio integration in Next.js, try these steps:

1. Make sure you're logged in:
   ```bash
   npm run sanity:login
   ```

2. Check your project ID and dataset:
   ```bash
   npx sanity projects list
   ```
   Verify that you're using `h6zht0xd` as your project ID and `production` as your dataset.

3. If all else fails, use the Sanity.io web interface directly.

## API Integration

When fetching content from Sanity in your Next.js app, make sure to use these settings:

```javascript
const client = createClient({
  projectId: "h6zht0xd",
  dataset: "production",
  apiVersion: "2021-06-07",
  useCdn: true,
});
``` 