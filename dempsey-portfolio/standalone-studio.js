#!/usr/bin/env node
const { createServer } = require('http')
const { loadCliConfig } = require('@sanity/cli')
const { createProxyMiddleware } = require('http-proxy-middleware')
const express = require('express')
const path = require('path')

// Create a simple Express app
const app = express()
const PORT = 3333

// Sanity studio configuration
const studioConfig = {
  projectId: 'v20paafs',
  dataset: 'production',
}

// Serve the studio
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Dempsey Sanity Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          html, body, #sanity { height: 100%; }
          body { margin: 0; padding: 0; }
        </style>
      </head>
      <body>
        <div id="sanity">Loading Sanity Studio...</div>
        <script>
          // Basic config for Sanity Studio
          window.sanityConfig = {
            projectId: '${studioConfig.projectId}',
            dataset: '${studioConfig.dataset}',
            apiVersion: '2021-06-07'
          };
        </script>
        <script src="https://cdn.sanity.io/studiojs/v20paafs/production/v1.js"></script>
      </body>
    </html>
  `)
})

// Start the server
app.listen(PORT, () => {
  console.log(`
    🚀 Standalone Sanity Studio started!
    
    Open your browser at: http://localhost:${PORT}
    
    This is a simple standalone studio that bypasses Next.js integration issues.
    Use this for content editing until the main studio integration is fixed.
  `)
}) 