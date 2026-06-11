'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card3D from './Card3D'

const categories = ['All', 'Art & Craft', 'Play Time', 'Music & Dance', 'Outdoor']

const gallery = [
  { id: 1, emoji: '🎨', title: 'Painting Fun', category: 'Art & Craft', color: '#FF6B9D' },
  { id: 2, emoji: '🏃', title: 'Outdoor Games', category: 'Play Time', color: '#4ECDC4' },
  { id: 3, emoji: '🎵', title: 'Music Class', category: 'Music & Dance', color: '#A78BFA' },
  { id: 4, emoji: '🌿', title: 'Nature Walk', category: 'Outdoor', color: '#44B09E' },
  { id: 5, emoji: '🎭', title: 'Drama Time', category: 'Music & Dance', color: '#FFB347' },
  { id: 6, emoji: '🧩', title: 'Puzzle Challenge', category: 'Play Time', color: '#FF6B9D' },
  { id: 7, emoji: '✂️', title: 'Craft Session', category: 'Art & Craft', color: '#A78BFA' },
  { id: 8, emoji: '🌱', title: 'Gardening', category: 'Outdoor', color: '#4ECDC4' },
  { id: 9, emoji: '🎪', title: 'Circus Day', category: 'Play Time', color: '#FFB347' },
  { id: 10, emoji: '🎤', title: 'Show & Tell', category: 'Music & Dance', color: '#FF6B9D' },
  { id: 11, emoji: '🖌️', title: 'Finger Painting', category: 'Art & Craft', color: '#A78BFA' },
  { id: 12, emoji: '⚽', title: 'Sports Day', category: 'Outdoor', color: '#44B09E' },
]

export default function GalleryGrid() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? gallery
    : gallery.filter((item) => item.category === filter)

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              filter === cat
                ? 'gradient-primary text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-pink-50 shadow-sm'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <Card3D>
                <div
                  className="relative p-8 rounded-2xl text-center cursor-pointer overflow-hidden group"
                  style={{ background: `${item.color}15` }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`,
                    }}
                  />
                  <motion.span
                    className="text-5xl block mb-4 relative z-10"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {item.emoji}
                  </motion.span>
                  <h3 className="font-semibold text-gray-800 relative z-10">{item.title}</h3>
                  <span
                    className="text-xs font-medium mt-2 inline-block px-3 py-1 rounded-full relative z-10"
                    style={{ background: `${item.color}30`, color: item.color }}
                  >
                    {item.category}
                  </span>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
