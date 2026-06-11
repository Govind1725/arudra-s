'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const shapes = [
  { emoji: '⭐', size: 24, x: 10, y: 20, delay: 0, duration: 4 },
  { emoji: '🌈', size: 30, x: 85, y: 15, delay: 1, duration: 5 },
  { emoji: '🦋', size: 20, x: 20, y: 70, delay: 2, duration: 3.5 },
  { emoji: '🌸', size: 22, x: 75, y: 60, delay: 0.5, duration: 4.5 },
  { emoji: '🎈', size: 28, x: 50, y: 30, delay: 1.5, duration: 6 },
  { emoji: '☁️', size: 35, x: 5, y: 40, delay: 3, duration: 7 },
  { emoji: '🌟', size: 20, x: 90, y: 80, delay: 0.8, duration: 3.8 },
  { emoji: '🎨', size: 26, x: 40, y: 85, delay: 2.5, duration: 5.2 },
  { emoji: '📚', size: 22, x: 60, y: 10, delay: 1.2, duration: 4.2 },
  { emoji: '🎵', size: 18, x: 30, y: 50, delay: 3.5, duration: 3.3 },
  { emoji: '🌈', size: 28, x: 70, y: 40, delay: 4, duration: 5.5 },
  { emoji: '✨', size: 16, x: 15, y: 90, delay: 0.3, duration: 2.8 },
  { emoji: '🎪', size: 32, x: 55, y: 75, delay: 2.8, duration: 6.5 },
  { emoji: '🍎', size: 20, x: 80, y: 25, delay: 4.5, duration: 4.8 },
  { emoji: '🧸', size: 24, x: 45, y: 55, delay: 1.8, duration: 5.8 },
]

export default function FloatingShapes() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            fontSize: shape.size,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            rotate: [0, 10, -10, 5, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {shape.emoji}
        </motion.div>
      ))}
    </div>
  )
}
