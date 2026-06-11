'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Card3DProps {
  children: ReactNode
  className?: string
  shine?: boolean
}

export default function Card3D({ children, className = '' }: Card3DProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  )
}
