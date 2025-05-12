import DOMPurify from 'dompurify';

/**
 * Safely sanitizes and logs API errors
 * @param error - The error object or message to sanitize and log
 * @param context - Optional context to include in the log
 */
export function sanitizeAndLogError(error: unknown, context: string = 'API Error'): void {
  // Determine error message based on type
  let errorMessage: string;
  
  if (error instanceof Error) {
    errorMessage = DOMPurify.sanitize(error.message);
  } else if (typeof error === 'string') {
    errorMessage = DOMPurify.sanitize(error);
  } else if (error && typeof error === 'object') {
    try {
      errorMessage = DOMPurify.sanitize(JSON.stringify(error));
    } catch (e) {
      errorMessage = 'Unknown object error (could not stringify)';
    }
  } else {
    errorMessage = 'Unknown error occurred';
  }
  
  // Log the sanitized error
  console.error(`${context}: ${errorMessage}`);
}

/**
 * Sanitizes response data to prevent XSS in logs
 * @param data - The API response data to sanitize
 * @returns The sanitized data as a string
 */
export function sanitizeResponseData(data: unknown): string {
  try {
    if (typeof data === 'string') {
      return DOMPurify.sanitize(data);
    }
    
    return DOMPurify.sanitize(JSON.stringify(data));
  } catch (error) {
    return 'Could not sanitize response data';
  }
}

/**
 * A wrapper function for fetch that includes error handling and sanitization
 * @param url - The URL to fetch
 * @param options - Fetch options
 * @returns The response data
 */
export async function safeFetch<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${sanitizeResponseData(errorData)}`
      );
    }
    
    return await response.json() as T;
  } catch (error) {
    sanitizeAndLogError(error, `Fetch error for ${url}`);
    throw error;
  }
} 