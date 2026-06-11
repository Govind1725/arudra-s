'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [show, setShow] = useState(true)
  const [ready, setReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null!)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      setReady(true)
    }

    const handleTimeUpdate = () => {
      if (video.currentTime >= 3.5) {
        setReady(true)
      }
    }

    video.addEventListener('ended', handleEnded)
    video.addEventListener('timeupdate', handleTimeUpdate)

    const timer = setTimeout(() => setReady(true), 5000)

    return () => {
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (!ready) return
    const timer = setTimeout(() => setShow(false), 800)
    return () => clearTimeout(timer)
  }, [ready])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FFF8F0]"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-contain max-w-4xl max-h-[80vh]"
              poster="/images/loader-fallback.png"
            >
              <source src="/videos/loading.mp4" type="video/mp4" />
            </video>

            {/* Skip button */}
            <motion.button
              onClick={() => setReady(true)}
              className="absolute bottom-8 right-8 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-600 text-sm font-medium shadow-lg hover:bg-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skip →
            </motion.button>

            {/* Loading indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2.5 h-2.5 rounded-full bg-primary"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
