"use client";

import { usePathname } from 'next/navigation';
import Header from "./Header";

export default function ClientNav() {
  const pathname = usePathname();
  const isStudioPage = pathname.startsWith('/studio');
  
  if (isStudioPage) return null;
  return <Header />;
} 