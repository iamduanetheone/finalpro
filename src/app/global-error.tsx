'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
          <p className="text-lg mb-8">
            An unexpected error has occurred. Our team has been notified.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
} 