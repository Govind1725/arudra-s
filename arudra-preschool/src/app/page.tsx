'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCounter from '@/components/AnimatedCounter'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import Card3D from '@/components/Card3D'
import SecurityCard from '@/components/SecurityCard'

const stars = [
  { top: '10%', left: '8%', delay: 0 },
  { top: '18%', left: '78%', delay: 0.5 },
  { top: '48%', left: '12%', delay: 1 },
  { top: '68%', left: '82%', delay: 1.5 },
  { top: '82%', left: '22%', delay: 2 },
]

const programs = [
  {
    age: '18-24 Months',
    title: 'Toddler',
    desc: 'A gentle introduction to school with sensory play and bonding activities.',
    emoji: '🐣',
    color: '#FF6B9D',
    features: ['Sensory Play', 'Music & Movement', 'Story Time', 'Parent Participation'],
  },
  {
    age: '2-3 Years',
    title: 'Preschool',
    desc: 'Building independence through creative play and early learning concepts.',
    emoji: '🐰',
    color: '#4ECDC4',
    features: ['Art & Craft', 'Numbers & Letters', 'Outdoor Play', 'Social Skills'],
  },
  {
    age: '4-5 Years',
    title: 'Pre-K',
    desc: 'School readiness program with advanced literacy, math, and thinking skills.',
    emoji: '🦁',
    color: '#A78BFA',
    features: ['Reading Prep', 'Math Concepts', 'Science Explorations', 'Writing Skills'],
  },
  {
    age: 'All Ages',
    title: 'After School',
    desc: 'Extended care with enrichment activities, homework help, and free play.',
    emoji: '🎨',
    color: '#FFB347',
    features: ['Homework Help', 'Art Classes', 'Music Lessons', 'Free Play'],
  },
]

const highlights = [
  { emoji: '👩‍🏫', title: 'Certified Teachers', desc: 'Experienced and loving educators', color: '#FF6B9D', bg: '#FFE0EC' },
  { emoji: '🔒', title: 'Safe Environment', desc: '24/7 monitored, child-safe facility', color: '#00C9B7', bg: '#D4FCF7' },
  { emoji: '📚', title: 'Smart Curriculum', desc: 'Play-based learning approach', color: '#8B5CF6', bg: '#EDE9FE' },
  { emoji: '🍎', title: 'Healthy Meals', desc: 'Nutritious home-cooked food', color: '#F97316', bg: '#FFEDD5' },
]

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FFF8F0] pointer-events-none" />

        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl pointer-events-none"
            style={{ top: star.top, left: star.left }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              delay: star.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ⭐
          </motion.div>
        ))}

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm text-primary font-medium text-sm shadow-lg mb-6">
              🌟 Where Little Stars Shine Bright!
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fun mb-6 leading-tight break-words"
          >
            Welcome to{' '}
            <span className="gradient-text">Arudra&apos;s</span>
            <br />
            <span className="text-gray-800">Little Stars</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Where imaginations soar, friendships bloom, and every child discovers
            the joy of learning through play!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full gradient-primary text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                🎒 Enroll Your Child
              </motion.button>
            </Link>
            <Link href="/programs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white text-gray-700 font-semibold text-lg shadow-xl hover:shadow-2xl transition-all border-2 border-pink-100"
              >
                📚 Explore Programs
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 text-sm"
            >
              Scroll to explore ↓
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-fun text-gray-800 mt-3 mb-4">
              Why Parents Love{' '}
              <span className="gradient-text">Arudra&apos;s</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We provide a nurturing environment where your child can grow, learn, and thrive.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  className="px-6 pt-10 pb-8 text-center rounded-[28px] shadow-lg flex flex-col items-center"
                  style={{ background: item.bg, border: `1px solid ${item.color}25` }}
                  whileHover={{ y: -4, boxShadow: `0 20px 50px ${item.color}20` }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Top ~33% — image placeholder */}
                  <div className="flex justify-center mb-8">
                    <div
                      className="w-28 h-28 rounded-full flex items-center justify-center shadow-lg overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}20, ${item.color}08)`,
                        border: `2px solid ${item.color}35`,
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center" style={{ color: `${item.color}90` }}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Middle — heading */}
                  <h3 className="font-semibold text-gray-800 text-base mb-3">{item.title}</h3>

                  {/* Bottom — description */}
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[180px]">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <SecurityCard />
            </div>
            <div className="md:col-span-2">
              <AnimatedSection direction="right">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Safety First</span>
                <h2 className="text-4xl md:text-5xl font-fun text-gray-800 mt-3 mb-4">
                  Your Child&apos;s Safety Is Our{' '}
                  <span className="gradient-text">Top Priority</span>
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                  We maintain a secure, loving environment with round-the-clock monitoring,
                  strict access control, and trained staff to ensure your child feels safe
                  and protected at all times.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent via-pink-50/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Programs</span>
            <h2 className="text-4xl md:text-5xl font-fun text-gray-800 mt-3 mb-4">
              Perfect Program for{' '}
              <span className="gradient-text">Every Age</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Age-appropriate programs designed to nurture your child&apos;s unique potential.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card3D>
                  <div
                    className="p-6 rounded-2xl min-h-[320px] relative overflow-hidden"
                    style={{ background: `${program.color}10` }}
                  >
                    <div
                      className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
                      style={{ background: program.color, transform: 'translate(30%, -30%)' }}
                    />
                    <motion.span
                      className="text-4xl block mb-4"
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
                    <h3 className="text-xl font-fun text-gray-800 mt-3 mb-2">{program.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{program.desc}</p>
                    <ul className="space-y-2">
                      {program.features.map((f, j) => (
                        <li key={j} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: program.color }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card3D>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link href="/programs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full gradient-secondary text-white font-semibold shadow-lg"
              >
                View All Programs →
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 bg-white/80 backdrop-blur-sm rounded-3xl shadow-soft border border-pink-100 overflow-hidden">
            <AnimatedCounter end={12} suffix="+" label="Years Experience" emoji="📅" />
            <AnimatedCounter end={500} suffix="+" label="Happy Children" emoji="👶" />
            <AnimatedCounter end={50} suffix="+" label="Expert Teachers" emoji="👩‍🏫" />
            <AnimatedCounter end={98} suffix="%" label="Parent Satisfaction" emoji="⭐" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent via-purple-50/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-fun text-gray-800 mt-3 mb-4">
              What Parents{' '}
              <span className="gradient-text">Say</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Hear from our wonderful community of parents and their little stars.
            </p>
          </AnimatedSection>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card3D>
            <motion.div
              className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center"
              style={{
                background: 'linear-gradient(135deg, #FF6B9D, #FF8E8E, #FFB347)',
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
              <AnimatedSection>
                <motion.span
                  className="text-6xl block mb-6"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🌟
                </motion.span>
                <h2 className="text-3xl md:text-5xl font-fun text-white mb-4">
                  Ready to Join Our Little Stars?
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
                  Give your child the gift of a happy, nurturing, and fun learning environment.
                  Enroll today and watch them shine!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 rounded-full bg-white text-primary font-semibold text-lg shadow-xl"
                    >
                      🎒 Enroll Now
                    </motion.button>
                  </Link>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 rounded-full bg-white/20 text-white font-semibold text-lg border-2 border-white/50"
                    >
                      📞 Schedule a Tour
                    </motion.button>
                  </Link>
                </div>
              </AnimatedSection>
            </motion.div>
          </Card3D>
        </div>
      </section>

      {/* Back to top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full gradient-primary text-white shadow-lg flex items-center justify-center z-40 text-xl"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        ↑
      </motion.button>
    </div>
  )
}
