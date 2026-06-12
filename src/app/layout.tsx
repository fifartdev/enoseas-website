import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ENOSEAS - Marine Engineering Excellence',
  description: 'Leading maritime engineering, automation, and decarbonization solutions for global shipping.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-navy-dark text-white">{children}</body>
    </html>
  )
}
