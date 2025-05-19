'use client'

/**
 * This configuration is used for the Sanity Studio mounted on the `/studio` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'
// import { blockComponents } from './src/sanity/lib/blockComponents' // Custom blockComponents not directly used here

export default defineConfig({
  name: 'dempsey-studio',
  title: 'Dempsey Portfolio',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}), // Use imported apiVersion
  ],
  schema,
  document: {
    productionUrl: async (prev, context) => {
      // Implement your production URL logic here if needed
      return prev
    }
  },
  // Removing form input customization to test if it resolves the nesting issue
  // form: {
  //   components: {
  //     input: (props) => {
  //       if (props.schemaType.name === 'blockContent') {
  //         return props.renderDefault(props)
  //       }
  //       return props.renderDefault(props)
  //     }
  //   }
  // },
  cors: {
    credentials: true,
  },
  // Force a specific API version 
  apiVersion: apiVersion, // Use imported apiVersion
  // Don't use a CDN for authentication requests
  useCdn: false,
})
