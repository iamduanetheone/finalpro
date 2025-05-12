import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

// For authenticated requests
export const writableClient = createClient({
  projectId: "v20paafs",
  dataset: "production",
  apiVersion: "2021-06-07", 
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Only available on the server
  withCredentials: true, // For frontend studio authentication
})
