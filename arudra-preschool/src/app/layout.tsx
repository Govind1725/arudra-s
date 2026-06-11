'use client'

import { ReactNode, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingShapes from '@/components/FloatingShapes'
import WhatsAppButton from '@/components/WhatsAppButton'
import LoadingScreen from '@/components/LoadingScreen'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 100)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <html lang="en">
      <head>
        <title>Arudra&apos;s Preschool - Where Little Stars Shine!</title>
        <meta name="description" content="Welcome to Arudra's Preschool - A nurturing environment where your child's imagination grows and dreams take flight." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-[#FFF8F0]">
        <LoadingScreen />
        <FloatingShapes />
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
