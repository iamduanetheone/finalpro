/**
 * Server-side Sanity client utilities
 */

import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env' // Import central config

// Standard client
export const sanityClient = createClient({
  projectId, // Use imported projectId
  dataset, // Use imported dataset
  apiVersion, // Use imported apiVersion
  useCdn: false,
})

// Token-based client
export function getClient(token?: string) {
  return createClient({
    projectId, // Use imported projectId
    dataset, // Use imported dataset
    apiVersion, // Use imported apiVersion
    useCdn: false,
    token,
    withCredentials: true,
  })
}

// Credentials client
export const credentialsClient = createClient({
  projectId, // Use imported projectId
  dataset, // Use imported dataset
  apiVersion, // Use imported apiVersion
  useCdn: false,
  withCredentials: true,
}) 