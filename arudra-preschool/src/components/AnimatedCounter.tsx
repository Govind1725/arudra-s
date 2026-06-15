'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  label: string
  emoji: string
  duration?: number
}

export default function AnimatedCounter({
  end,
  suffix = '',
  label,
  emoji,
  duration = 2,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null!)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [inView, end, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center p-6"
    >
      <motion.span
        className="text-4xl block mb-2"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {emoji}
      </motion.span>
      <div className="text-4xl font-bold gradient-text font-fun mb-1">
        {count}{suffix}
      </div>
      <div className="text-gray-500 text-sm font-medium">{label}</div>
    </motion.div>
  )
}
