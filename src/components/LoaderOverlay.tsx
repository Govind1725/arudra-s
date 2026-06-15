'use client'

import { useState, useRef, useEffect, ReactNode } from 'react'

export default function LoaderOverlay({ children }: { children: ReactNode }) {
  const [done, setDone] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const endedRef = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let cancelled = false

    const onEnded = () => {
      if (cancelled) return
      setTimeout(() => {
        if (!cancelled) setDone(true)
      }, 700)
    }

    video.addEventListener('ended', onEnded)
    video.play()

    const fallback = setTimeout(() => {
      if (!cancelled) setDone(true)
    }, 10000)

    return () => {
      cancelled = true
      video.removeEventListener('ended', onEnded)
      clearTimeout(fallback)
    }
  }, [])

  return (
    <>
      <div
        className={`transition-opacity duration-700 ${
          done ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {children}
      </div>

      {!done && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FFF8F0] transition-opacity duration-700">
          <div className="relative w-full max-w-lg mx-4">
            <video
              ref={videoRef}
              src="/videos/arudra-desktop.mp4"
              className="w-full rounded-2xl shadow-2xl border-2 border-orange-100"
              preload="auto"
              loop={false}
              muted
              playsInline
              autoPlay
            />
          </div>
          <p className="mt-6 text-gray-500 text-sm font-medium animate-pulse">
            Loading your adventure...
          </p>
        </div>
      )}
    </>
  )
}
