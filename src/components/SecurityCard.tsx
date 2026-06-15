'use client'

import { motion } from 'framer-motion'

export default function SecurityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-xs mx-auto bg-gradient-to-b from-gray-900 to-gray-800 rounded-[32px] p-8 shadow-2xl"
    >
      {/* Top Section */}
      <div className="flex justify-center mb-8 relative">
        {/* Double circle frame */}
        <div className="relative">
          {/* Dotted outer border */}
          <div className="w-28 h-28 rounded-full border-2 border-dashed border-white/30 flex items-center justify-center">
            {/* Solid inner border */}
            <div className="w-24 h-24 rounded-full border-[3px] border-white flex items-center justify-center overflow-hidden bg-gray-700">
              <span className="text-5xl">📷</span>
            </div>
          </div>
          {/* CCTV icon overlapping from upper-left */}
          <div className="absolute -top-2 -left-3 w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg border-2 border-white">
            <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <h3 className="text-white text-xl font-bold text-center mb-4">
        Security &amp; CCTV Coverage
      </h3>

      {/* Bottom Section */}
      <p className="text-gray-400 text-sm text-center leading-relaxed">
        Our facility is equipped with 24/7 CCTV monitoring across all classrooms, 
        play areas, and entry points. Secure access system ensures only authorized 
        personnel can enter the premises.
      </p>
    </motion.div>
  )
}
