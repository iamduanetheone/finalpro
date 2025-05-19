'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

// The NextStudio component renders Sanity Studio
export default function Studio() {
  return <NextStudio config={config} />
} 