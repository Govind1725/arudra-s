import { ReactNode } from 'react'
import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from '@/app/client-layout'

export const metadata: Metadata = {
  title: "Arudra's Preschool - Where Little Stars Shine!",
  description:
    "Welcome to Arudra's Preschool - A nurturing environment where your child's imagination grows and dreams take flight.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FFF8F0]">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
