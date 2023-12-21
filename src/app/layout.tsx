
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Santiago Arias',
  description: 'Portfolio Desarrollado por Santiago Arias en tengologias next.tsx',
  icons:'../assets/node_logo.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="../assets/node_logo.png" type="image/x-icon" />
      <body className={`${inter.className}`}>{children}</body>
      <SpeedInsights />
      <Analytics />
    </html>
  )
}
