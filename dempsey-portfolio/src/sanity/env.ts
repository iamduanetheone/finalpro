// Sanity environment configuration
// Default values are provided to ensure the application works even without .env.local

// API version - consistent with the one used in sanity.config.ts
export const apiVersion = '2021-06-07'

// Dataset - production is the standard dataset
export const dataset = 'production'

// Project ID - v20paafs is the correct project ID
export const projectId = 'v20paafs'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
