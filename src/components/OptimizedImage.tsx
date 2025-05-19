'use client';

import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';

type OptimizedImageProps = Omit<ImageProps, 'src'> & {
  src: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
};

/**
 * OptimizedImage component that enhances the Next.js Image component with:
 * - Support for modern formats (WebP, AVIF) with fallback
 * - Lazy loading by default
 * - Responsive sizes
 */
export default function OptimizedImage({
  src,
  fallbackSrc,
  alt,
  width,
  height,
  loading = 'lazy',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  ...props
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);

  // If src is from Sanity or other external source, use it directly
  const isExternalImage = src.startsWith('http') || src.includes('data:');
  
  // Otherwise, try to use optimized versions if they exist
  const getOptimizedSrc = (originalSrc: string): string => {
    if (isExternalImage) return originalSrc;
    
    // Remove leading slash if exists
    const cleanSrc = originalSrc.startsWith('/') ? originalSrc.slice(1) : originalSrc;
    
    // Extract file components
    const lastDotIndex = cleanSrc.lastIndexOf('.');
    if (lastDotIndex === -1) return originalSrc;
    
    const path = cleanSrc.substring(0, lastDotIndex);
    return `/optimized/${path}.webp`; // Use WebP as default format
  };
  
  useEffect(() => {
    if (!hasError) {
      setImageSrc(getOptimizedSrc(src));
    } else if (fallbackSrc) {
      setImageSrc(fallbackSrc);
    } else {
      // If optimized image fails and no fallback, use original
      setImageSrc(src);
    }
  }, [src, fallbackSrc, hasError]);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      sizes={sizes}
      onError={() => {
        if (!hasError) {
          setHasError(true);
        }
      }}
      {...props}
    />
  );
} 