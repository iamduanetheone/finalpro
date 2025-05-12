'use client'

import { NextStudio } from 'next-sanity/studio'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from '../../../sanity/schemaTypes'

export default function CustomStudio() {
  return (
    <NextStudio
      config={defineConfig({
        name: 'dempsey-studio',
        title: 'Dempsey Content Studio',
        projectId: 'v20paafs',
        dataset: 'production',
        basePath: '/studio',
        plugins: [
          structureTool(),
          visionTool({ defaultApiVersion: '2021-06-07' }),
        ],
        schema,
      })}
    />
  )
} 