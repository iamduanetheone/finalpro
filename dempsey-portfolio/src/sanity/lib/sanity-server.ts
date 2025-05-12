/**
 * Server-side Sanity client utilities
 */

import { createClient } from 'next-sanity'

// Standard client
export const sanityClient = createClient({
  projectId: 'v20paafs',
  dataset: 'production',
  apiVersion: '2021-06-07',
  useCdn: false,
})

// Token-based client
export function getClient(token?: string) {
  return createClient({
    projectId: 'v20paafs',
    dataset: 'production',
    apiVersion: '2021-06-07',
    useCdn: false,
    token,
    withCredentials: true,
  })
}

// Credentials client
export const credentialsClient = createClient({
  projectId: 'v20paafs',
  dataset: 'production',
  apiVersion: '2021-06-07',
  useCdn: false,
  withCredentials: true,
}) 