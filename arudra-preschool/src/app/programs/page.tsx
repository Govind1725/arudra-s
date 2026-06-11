'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import Card3D from '@/components/Card3D'

const programs = [
  {
    age: '18-24 Months',
    title: 'Toddler Program',
    emoji: '🐣',
    color: '#FF6B9D',
    schedule: '2 days/week',
    hours: '9:00 AM - 12:00 PM',
    desc: 'A gentle, nurturing introduction to the school environment. Our toddler program focuses on sensory exploration, bonding, and building trust through loving interactions.',
    highlights: [
      'Sensory play activities',
      'Music and movement',
      'Story time with puppets',
      'Gentle separation from parents',
      'Outdoor exploration',
    ],
  },
  {
    age: '2-3 Years',
    title: 'Preschool Program',
    emoji: '🐰',
    color: '#4ECDC4',
    schedule: '3 days/week',
    hours: '9:00 AM - 1:00 PM',
    desc: 'Building independence and social skills through creative play, art, and early learning concepts. Children develop confidence and curiosity in a supportive setting.',
    highlights: [
      'Art and craft projects',
      'Introduction to letters & numbers',
      'Social skill development',
      'Outdoor play & nature walks',
      'Show and tell',
    ],
  },
  {
    age: '4-5 Years',
    title: 'Pre-K Program',
    emoji: '🦁',
    color: '#A78BFA',
    schedule: '5 days/week',
    hours: '9:00 AM - 2:00 PM',
    desc: 'Our comprehensive school readiness program prepares children for kindergarten with advanced literacy, math, science, and critical thinking skills.',
    highlights: [
      'Reading and phonics',
      'Math concepts & problem solving',
      'Science experiments',
      'Writing and fine motor skills',
      'Kindergarten readiness',
    ],
  },
  {
    age: 'All Ages',
    title: 'After School Program',
    emoji: '🎨',
    color: '#FFB347',
    schedule: 'Mon-Fri',
    hours: '2:00 PM - 5:30 PM',
    desc: 'Extended care with enriching activities including art classes, music lessons, homework help, and supervised free play in a relaxed environment.',
    highlights: [
      'Homework assistance',
      'Art and music classes',
      'Outdoor recreation',
      'Healthy snacks provided',
      'Pick-up service available',
    ],
  },
]

const scheduleGrid = [
  { time: '8:30 AM', activity: 'Welcome & Free Play', emoji: '🎪' },
  { time: '9:00 AM', activity: 'Morning Circle Time', emoji: '🔄' },
  { time: '9:30 AM', activity: 'Learning Centers', emoji: '📚' },
  { time: '10:30 AM', activity: 'Snack Time', emoji: '🍎' },
  { time: '11:00 AM', activity: 'Outdoor Play', emoji: '🌳' },
  { time: '12:00 PM', activity: 'Lunch Time', emoji: '🍝' },
  { time: '1:00 PM', activity: 'Story Time & Rest', emoji: '📖' },
  { time: '2:00 PM', activity: 'Art & Music', emoji: '🎨' },
  { time: '3:00 PM', activity: 'Goodbye Circle', emoji: '👋' },
]

export default function Programs() {
  return (
    <div className="pt-24 pb-16">
      <section className="relative px-4 py-16 bg-gradient-to-b from-pink-50/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Programs</span>
            <h1 className="text-4xl md:text-5xl font-fun text-gray-800 mt-3 mb-4">
              Programs Designed for{' '}
              <span className="gradient-text">Every Stage</span>
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              Age-appropriate curriculum that nurtures your child&apos;s development at every step.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {programs.map((program, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card3D>
                  <div
                    className="p-8 md:p-12 rounded-2xl relative overflow-hidden"
                    style={{ background: `${program.color}08` }}
                  >
                    <div
                      className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-5"
                      style={{ background: program.color, transform: 'translate(30%, -30%)' }}
                    />
                    <div className="grid md:grid-cols-3 gap-8 items-start relative z-10">
                      <div className="md:col-span-1">
                        <motion.span
                          className="text-5xl block mb-4"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                        >
                          {program.emoji}
                        </motion.span>
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{ background: `${program.color}20`, color: program.color }}
                        >
                          {program.age}
                        </span>
                        <h2 className="text-2xl font-fun text-gray-800 mt-3">{program.title}</h2>
                        <div className="mt-4 space-y-2 text-sm text-gray-500">
                          <p>📅 {program.schedule}</p>
                          <p>⏰ {program.hours}</p>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-gray-600 mb-6">{program.desc}</p>
                        <h3 className="font-semibold text-gray-800 mb-3">Program Highlights:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {program.highlights.map((h, j) => (
                            <div
                              key={j}
                              className="flex items-center gap-2 text-sm text-gray-600"
                            >
                              <span
                                className="w-2 h-2 rounded-full flex-shrink-0"
                                style={{ background: program.color }}
                              />
                              {h}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="relative px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Daily Rhythm</span>
            <h2 className="text-4xl md:text-5xl font-fun text-gray-800 mt-3 mb-4">
              A Day at{' '}
              <span className="gradient-text">Arudra&apos;s</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every day is filled with fun, learning, and discovery!
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {scheduleGrid.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.03}>
                <motion.div
                  className="p-4 bg-white rounded-xl shadow-sm border border-pink-50 flex items-center gap-4"
                  whileHover={{ x: 5, borderColor: '#FF6B9D' }}
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <div className="text-sm font-semibold gradient-text">{item.time}</div>
                    <div className="text-gray-600 text-sm">{item.activity}</div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card3D>
            <motion.div
              className="p-12 rounded-3xl text-center"
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #7C3AED)',
              }}
            >
              <AnimatedSection>
                <span className="text-5xl block mb-4">🌟</span>
                <h2 className="text-3xl md:text-4xl font-fun text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-white/80 mb-8 max-w-md mx-auto">
                  Schedule a visit and see why Arudra&apos;s is the perfect place for your little star!
                </p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full bg-white text-purple-600 font-semibold text-lg shadow-xl"
                  >
                    📞 Contact Us Today
                  </motion.button>
                </Link>
              </AnimatedSection>
            </motion.div>
          </Card3D>
        </div>
      </section>
    </div>
  )
}
