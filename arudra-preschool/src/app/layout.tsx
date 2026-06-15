import { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { Poppins, Bubblegum_Sans } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/app/client-layout'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const bubblegumSans = Bubblegum_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bubblegum',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FF6B9D',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://arudrapreschool.com'),
  title: {
    default: "Arudra's Preschool — Where Little Stars Shine!",
    template: "%s | Arudra's Preschool",
  },
  description:
    "Arudra's Preschool in Chennai — A nurturing, play-based learning environment for children aged 18 months to 6 years. Enroll today and watch your child shine!",
  keywords: [
    "preschool Chennai",
    "kindergarten Chennai",
    "best preschool Chennai",
    "Arudra preschool",
    "early childhood education",
    "play-based learning",
    "toddler school Chennai",
    "pre-K Chennai",
  ],
  authors: [{ name: "Arudra's Preschool" }],
  creator: "Arudra's Preschool",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://arudrapreschool.com',
    siteName: "Arudra's Preschool",
    title: "Arudra's Preschool — Where Little Stars Shine!",
    description:
      "A nurturing, play-based preschool in Chennai for children aged 18 months to 6 years. Certified teachers, safe environment & fun learning!",
    images: [
      {
        url: '/images/logo-main.png',
        width: 1200,
        height: 630,
        alt: "Arudra's Preschool",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Arudra's Preschool — Where Little Stars Shine!",
    description:
      "A nurturing, play-based preschool in Chennai for children aged 18 months to 6 years.",
    images: ['/images/logo-main.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  name: "Arudra's Preschool",
  description:
    "A nurturing preschool in Chennai offering play-based learning programs for children aged 18 months to 6 years.",
  url: 'https://arudrapreschool.com',
  telephone: '+91-70929-40935',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Sa 08:00-18:00',
  priceRange: '₹₹',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${bubblegumSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`min-h-screen bg-[#FFF8F0] ${poppins.className}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
