'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Parent of Mia (Age 4)',
    content: 'Arudra\'s Preschool has been an incredible journey for my daughter. She\'s grown so confident and loves going to school every day!',
    image: '/images/testimonial-sarah.png',
    color: '#FF6B9D',
  },
  {
    name: 'Mike & Lisa Chen',
    role: 'Parents of Ethan (Age 3)',
    content: 'The teachers here are amazing! They truly care about each child\'s development. Our son has learned so much through play.',
    image: '/images/testimonial-mike-lisa.png',
    color: '#4ECDC4',
  },
  {
    name: 'Priya Patel',
    role: 'Parent of Aanya (Age 5)',
    content: 'Best decision we ever made! The curriculum is perfect - it\'s fun, engaging, and prepares children wonderfully for kindergarten.',
    image: '/images/testimonial-priya.png',
    color: '#A78BFA',
  },
  {
    name: 'Tom & Emily Davis',
    role: 'Parents of Lily (Age 4)',
    content: 'We love the creative approach to learning. The art projects, music classes, and outdoor activities keep our daughter excited every day!',
    image: '/images/testimonial-tom-emily.png',
    color: '#FFB347',
  },
]

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0)

  const next = () => setActive((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -120 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="rounded-3xl p-8 md:p-12 shadow-soft relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${testimonials[active].color}18, ${testimonials[active].color}08)`, border: `1px solid ${testimonials[active].color}30` }}
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg overflow-hidden relative"
              style={{ border: `3px solid ${testimonials[active].color}35` }}
            >
              <Image
                src={testimonials[active].image}
                alt={testimonials[active].name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </motion.div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
              &ldquo;{testimonials[active].content}&rdquo;
            </p>
            <div>
              <h4 className="font-semibold text-gray-800">{testimonials[active].name}</h4>
              <p className="text-gray-400 text-sm">{testimonials[active].role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-4 mt-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prev}
          className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-xl hover:shadow-lg transition-shadow"
        >
          ←
        </motion.button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === active ? 'w-8 gradient-primary' : 'bg-pink-200'
              }`}
            />
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={next}
          className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-xl hover:shadow-lg transition-shadow"
        >
          →
        </motion.button>
      </div>
    </div>
  )
}
