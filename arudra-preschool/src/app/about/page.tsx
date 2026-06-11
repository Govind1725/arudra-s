'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import Card3D from '@/components/Card3D'

const team = [
  { name: 'Mrs. Arudra', role: 'Founder & Director', emoji: '👩‍🏫', desc: '20+ years of early childhood education experience', color: '#FF6B9D' },
  { name: 'Ms. Emily', role: 'Lead Teacher', emoji: '👩‍🎓', desc: 'Certified Montessori educator', color: '#4ECDC4' },
  { name: 'Ms. Sarah', role: 'Art Specialist', emoji: '🎨', desc: 'Passionate about creative expression', color: '#A78BFA' },
  { name: 'Mr. Mike', role: 'Music Teacher', emoji: '🎵', desc: 'Making learning melodious and fun', color: '#FFB347' },
]

const values = [
  { emoji: '💖', title: 'Love & Care', desc: 'Every child is unique and deserves individual attention' },
  { emoji: '🎮', title: 'Learn Through Play', desc: 'We believe play is the highest form of learning' },
  { emoji: '🌍', title: 'Global Citizens', desc: 'Preparing children for a diverse world' },
  { emoji: '🌟', title: 'Celebrate Uniqueness', desc: 'Nurturing each child\'s special talents' },
  { emoji: '🤝', title: 'Parent Partnership', desc: 'Working together for your child\'s success' },
  { emoji: '🌈', title: 'Joyful Environment', desc: 'Creating happy memories that last a lifetime' },
]

export default function About() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="relative px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
              <h1 className="text-4xl md:text-5xl font-fun text-gray-800 mt-3 mb-6">
                Our Story of{' '}
                <span className="gradient-text">Love & Learning</span>
              </h1>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2012, Arudra&apos;s Little Stars Preschool began with a simple dream: 
                  to create a warm, nurturing space where children could learn, grow, and shine.
                </p>
                <p>
                  Our founder, Mrs. Arudra, envisioned a place where education meets imagination, 
                  where every child feels valued, and where the joy of discovery never ends.
                </p>
                <p>
                  Today, we are proud to be one of the most loved preschools in the community, 
                  with over 500 happy children and countless smiling parents.
                </p>
              </div>
              <div className="flex gap-6 mt-8">
                {[12, 500, 50].map((num, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold gradient-text font-fun">{num}+</div>
                    <div className="text-gray-400 text-sm">
                      {['Years', 'Children', 'Teachers'][i]}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="w-full aspect-square rounded-3xl gradient-bg flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    className="text-[10rem] opacity-20 absolute"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    ⭐
                  </motion.div>
                  <div className="text-center relative z-10">
                    <motion.span
                      className="text-8xl block mb-4"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      🏫
                    </motion.span>
                    <span className="font-fun text-2xl gradient-text">12 Years of Joy!</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative px-4 py-20 bg-gradient-to-b from-transparent via-pink-50/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-fun text-gray-800 mt-3 mb-4">
              What We Stand{' '}
              <span className="gradient-text">For</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <Card3D>
                  <motion.div
                    className="p-8 bg-white rounded-2xl shadow-soft border border-pink-50 text-center"
                    whileHover={{ y: -5 }}
                  >
                    <motion.span
                      className="text-5xl block mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {v.emoji}
                    </motion.span>
                    <h3 className="font-fun text-xl text-gray-800 mb-2">{v.title}</h3>
                    <p className="text-gray-500 text-sm">{v.desc}</p>
                  </motion.div>
                </Card3D>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-fun text-gray-800 mt-3 mb-4">
              Meet Our Amazing{' '}
              <span className="gradient-text">Teachers</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card3D>
                  <motion.div
                    className="p-8 rounded-2xl text-center bg-white shadow-soft border border-pink-50"
                    whileHover={{ y: -5 }}
                  >
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg"
                      style={{ background: `${member.color}20` }}
                    >
                      {member.emoji}
                    </div>
                    <h3 className="font-semibold text-gray-800">{member.name}</h3>
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full inline-block mt-2"
                      style={{ background: `${member.color}20`, color: member.color }}
                    >
                      {member.role}
                    </span>
                    <p className="text-gray-400 text-sm mt-3">{member.desc}</p>
                  </motion.div>
                </Card3D>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
