'use client'

import { useRef, ReactNode, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface Card3DProps {
  children: ReactNode
  className?: string
  shine?: boolean
}

export default function Card3D({ children, className = '', shine = true }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null!)
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17deg', '-17deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17deg', '17deg'])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    x.set(mouseX / width - 0.5)
    y.set(mouseY / height - 0.5)
  }

  const handleMouseEnter = () => setHovering(true)
  const handleMouseLeave = () => {
    setHovering(false)
    x.set(0)
    y.set(0)
  }

  return (
    <div ref={ref} className="perspective-1000" style={{ perspective: '1000px' }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.05 }}
        transition={{ scale: { duration: 0.3 } }}
        className={`relative overflow-hidden rounded-2xl ${className}`}
      >
        {children}
        {shine && hovering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3), transparent 70%)',
              transform: 'translateZ(20px)',
            }}
          />
        )}
      </motion.div>
    </div>
  )
}
