
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';

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
    </html>
  )
}
