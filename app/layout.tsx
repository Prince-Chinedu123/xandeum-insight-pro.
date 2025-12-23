import React from 'react';

export const metadata = {
  title: "XandeumInsight Pro",
  description: "Institutional Validator Analytics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
