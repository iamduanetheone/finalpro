"use client";

import { usePathname } from 'next/navigation';
import Footer from "./Footer";

export default function ClientFooter() {
  const pathname = usePathname();
  const isStudioPage = pathname.startsWith('/studio');
  
  if (isStudioPage) return null;
  return <Footer />;
} 