'use client'

import { NextStudio } from 'next-sanity/studio'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from '../../../sanity/schemaTypes'
import { apiVersion, dataset, projectId } from '../../../sanity/env'

export default function CustomStudio() {
  return (
    <NextStudio
      config={defineConfig({
        name: 'dempsey-studio',
        title: 'Dempsey Content Studio',
        projectId,
        dataset,
        basePath: '/studio',
        plugins: [
          structureTool(),
          visionTool({ defaultApiVersion: apiVersion }),
        ],
        schema,
      })}
    />
  )
} 