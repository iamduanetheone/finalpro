'use client'

import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { TypedObject } from '@portabletext/types'

// Define custom components for portable text rendering
const components: PortableTextComponents = {
  // Special handling for blockquotes
  block: {
    // Type the component properly
    blockquote: ({ children }) => {
      return (
        <blockquote className="border-l-4 border-gray-200 pl-4 my-4">
          {children}
        </blockquote>
      )
    }
  }
}

export function BlockContent({ value }: { value: TypedObject | TypedObject[] }) {
  return <PortableText value={value} components={components} />
} 