'use client'

import React from 'react'
import type { BlockProps } from 'sanity' // Import BlockProps for correct typing

// This file provides custom components for rendering portable text
// to fix rendering issues with blockquotes

export const CustomBlockquoteComponent = (props: BlockProps) => {
  // Use a blockquote element instead of a div inside a p
  // We render props.children to ensure marks and other inline elements within the blockquote are rendered.
  return (
    <blockquote className="border-l-4 border-gray-200 pl-4 my-4">
      {props.children}
    </blockquote>
  )
} 