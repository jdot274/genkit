import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Genkit Demo App - Comprehensive Feature Showcase',
  description: 'Explore all Firebase Genkit capabilities through an interactive playground',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
