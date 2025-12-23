import React from 'react';

export const metadata = {
  title: "XandeumInsight Pro | Institutional Validator Suite",
  description: "Advanced propagation indexing and storage depth analytics for Xandeum pNodes.",
  openGraph: {
    title: "XandeumInsight Pro",
    description: "Enterprise-grade pNode analytics suite.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ 
        margin: 0, 
        padding: 0, 
        backgroundColor: '#020617', 
        fontFamily: 'system-ui, -apple-system, sans-serif',
        overflowX: 'hidden'
      }}>
        {children}
      </body>
    </html>
  );
}
