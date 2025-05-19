import React from 'react';

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* You can add shared UI elements for this specific case study layout here if needed */}
      {children}
    </section>
  );
} 