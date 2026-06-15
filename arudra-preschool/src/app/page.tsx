'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCounter from '@/components/AnimatedCounter'
import Card3D from '@/components/Card3D'

const TestimonialCarousel = dynamic(() => import('@/components/TestimonialCarousel'), {
  loading: () => <div className="h-64 rounded-2xl bg-pink-50/50 animate-pulse" />,
  ssr: false,
})

const SecurityCard = dynamic(() => import('@/components/SecurityCard'), {
  loading: () => <div className="h-48 rounded-2xl bg-gray-50 animate-pulse" />,
})

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
    image: '/images/program-toddler.png',
    color: '#FF6B9D',
    features: ['Sensory Play', 'Music & Movement', 'Story Time', 'Parent Participation'],
  },
  {
    age: '2-3 Years',
    title: 'Preschool',
    desc: 'Building independence through creative play and early learning concepts.',
    image: '/images/program-preschool.png',
    color: '#4ECDC4',
    features: ['Art & Craft', 'Numbers & Letters', 'Outdoor Play', 'Social Skills'],
  },
  {
    age: '4-5 Years',
    title: 'Pre-K',
    desc: 'School readiness program with advanced literacy, math, and thinking skills.',
    image: '/images/program-prek.png',
    color: '#A78BFA',
    features: ['Reading Prep', 'Math Concepts', 'Science Explorations', 'Writing Skills'],
  },
  {
    age: 'All Ages',
    title: 'After School',
    desc: 'Extended care with enrichment activities, homework help, and free play.',
    image: '/images/program-afterschool.png',
    color: '#FFB347',
    features: ['Homework Help', 'Art Classes', 'Music Lessons', 'Free Play'],
  },
]

const highlights = [
  { emoji: '👩‍🏫', title: 'Certified Teachers', desc: 'Experienced and loving educators', color: '#FF6B9D', bg: '#FFE0EC', image: '/images/certified-teachers.png' },
  { emoji: '🔒', title: 'Safe Environment', desc: '24/7 monitored, child-safe facility', color: '#00C9B7', bg: '#D4FCF7', image: '/images/safe-environment.png' },
  { emoji: '📚', title: 'Smart Curriculum', desc: 'Play-based learning approach', color: '#8B5CF6', bg: '#EDE9FE', image: '/images/smart-curriculum.png' },
  { emoji: '🍎', title: 'Healthy Meals', desc: 'Nutritious home-cooked food', color: '#F97316', bg: '#FFEDD5', image: '/images/healthy-meals.png' },
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
            <span className="text-gray-800">Pre School</span>
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
                  className="px-6 pt-10 pb-8 text-center rounded-[28px] shadow-lg flex flex-col items-center h-full min-h-[280px]"
                  style={{ background: item.bg, border: `1px solid ${item.color}25` }}
                  whileHover={{ y: -4, boxShadow: `0 20px 50px ${item.color}20` }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Top ~33% — Image */}
                  <div className="flex justify-center mb-8">
                    <div
                      className="w-28 h-28 rounded-full flex items-center justify-center shadow-lg overflow-hidden relative"
                      style={{
                        border: `2px solid ${item.color}35`,
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="112px"
                        className="object-cover transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Middle — heading */}
                  <div className="flex-1 flex items-center justify-center">
                    <h3 className="font-semibold text-gray-800 text-base">{item.title}</h3>
                  </div>

                  {/* Bottom — description */}
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[180px] mt-auto">{item.desc}</p>
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
                    className="p-6 rounded-2xl min-h-[380px] relative overflow-hidden flex flex-col justify-between"
                    style={{ background: `${program.color}18`, border: `1px solid ${program.color}30` }}
                  >
                    <div>
                      {/* Program Image Banner */}
                      <div className="w-full h-36 rounded-xl overflow-hidden relative mb-4 shadow-sm border border-black/5 bg-white">
                        <Image
                          src={program.image}
                          alt={program.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-fun text-gray-800">{program.title}</h3>
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{ background: `${program.color}20`, color: program.color }}
                        >
                          {program.age}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4 leading-relaxed">{program.desc}</p>
                    </div>

                    <ul className="space-y-2 mt-auto">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 container-bloom rounded-3xl shadow-soft border border-pink-100 overflow-hidden">
            <AnimatedCounter end={12} suffix="+" label="Years Experience" emoji="📅" />
            <AnimatedCounter end={500} suffix="+" label="Happy Children" emoji="👶" />
            <AnimatedCounter end={50} suffix="+" label="Expert Teachers" emoji="👩‍🏫" />
            <AnimatedCounter end={98} suffix="%" label="Parent Satisfaction" emoji="⭐" />
          </div>
        </div>
      </section>

      {/* Our Daily Journey — The Learning Express */}
      <section className="relative px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/40 via-orange-50/20 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">Our Daily Journey</span>
            <h2 className="text-4xl md:text-5xl font-fun text-gray-800 mt-3 mb-4">
              The{' '}
              <span className="gradient-text" style={{ backgroundImage: 'linear-gradient(135deg, #F97316, #EAB308)' }}>Learning Express</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Hop aboard! Each stop on our journey is a new skill, a new discovery, and a lot of fun.
            </p>
          </AnimatedSection>

          {/* Train Engine */}
          <AnimatedSection>
            <motion.div
              className="relative mb-12 flex justify-center"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.div
                  className="relative w-32 h-32"
                  animate={{ x: [0, 8, 0], y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Image
                    src="/images/journey-train-removebg-preview.png"
                    alt="Train Engine"
                    fill
                    className="object-contain scale-[1.25]"
                  />
                </motion.div>
                <motion.div
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-bold text-orange-500 bg-white px-4 py-1 rounded-full shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Choo Choo! Let&apos;s learn! 🚀
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Train Cars */}
          <div className="space-y-6">
            {[
              {
                image: '/images/journey-drawing-removebg-preview.png', title: 'Drawing & Painting', tag: 'Ages 2-6', color: '#FF6B9D',
                desc: 'Exploring colors and shapes helps develop fine motor skills and hand-eye coordination. Regular practice fosters self-expression and creative confidence while improving grip strength necessary for writing.',
              },
              {
                image: '/images/journey-puzzle-removebg-preview.png', title: 'Puzzle & Memory', tag: 'Ages 3-6', color: '#4ECDC4',
                desc: 'Building critical thinking and problem-solving abilities. Children learn pattern recognition and spatial awareness, boosting cognitive memory and patience through rewarding interactive challenges.',
              },
              {
                image: '/images/journey-story-removebg-preview.png', title: 'Storytelling', tag: 'Ages 2-6', color: '#A78BFA',
                desc: 'Enhances vocabulary, listening skills, and emotional intelligence. It cultivates an early love for reading while teaching empathy and sequencing through immersive narrative journeys.',
              },
              {
                image: '/images/journey-yoga-removebg-preview.png', title: 'Yoga & Mindfulness', tag: 'Ages 3-6', color: '#FFB347',
                desc: 'Promotes physical flexibility, better posture, and concentration. It teaches self-regulation and stress management, helping little ones stay calm and focused throughout the day.',
              },
              {
                image: '/images/journey-brain-removebg-preview.png', title: 'Brain Development', tag: 'Ages 2-6', color: '#F472B6',
                desc: 'Targeted exercises for executive functions like attention and working memory. These activities lay the groundwork for academic success by strengthening neural pathways through cognitive play.',
              },
              {
                image: '/images/journey-phonics-removebg-preview.png', title: 'Phonics Mastery', tag: 'Ages 4-6', color: '#34D399',
                desc: 'A specialized reading program focusing on letter-sound recognition and blending. This improves pronunciation, spelling, and reading fluency, giving children a significant head start in literacy.',
              },
              {
                image: '/images/journey-math-removebg-preview.png', title: 'Mental Math & Abacus', tag: 'Ages 4-6', color: '#F87171',
                desc: 'Abacus training builds mental calculation speed and intense concentration. It simplifies complex math concepts into visual beads, removing math-phobia and boosting overall brain power.',
              },
              {
                image: '/images/journey-music-removebg-preview.png', title: 'Music & Rhymes', tag: 'Ages 2-5', color: '#818CF8',
                desc: 'Develops auditory processing, rhythm, and coordination. Music enhances memory and mood while supporting social bonding and language development through repetitive, joyful lyrics.',
              },
              {
                image: '/images/journey-clay-removebg-preview.png', title: 'Clay Modeling', tag: 'Ages 3-6', color: '#F59E0B',
                desc: 'Strengthens hand muscles and dexterity. It encourages architectural thinking and sensory exploration, allowing children to visualize and create physical objects in a 3D environment.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <motion.div
                  className="group"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`flex items-start gap-4 md:gap-8 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all relative overflow-hidden ${['container-bloom', 'container-fresh', 'container-breeze', 'container-sunny', 'container-lavender', 'container-peach', 'container-bloom', 'container-fresh', 'container-breeze'][i]}`}>
                    {i > 0 && (
                      <div className="absolute -top-3 left-12 md:left-16 w-[2px] h-6 bg-gradient-to-b from-orange-300 to-transparent" />
                    )}
                    <div
                      className="hidden md:flex w-12 h-12 rounded-full items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md"
                      style={{ background: item.color }}
                    >
                      {i + 1}
                    </div>
                    <motion.div
                      className="relative w-16 h-16 flex-shrink-0"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="64px"
                        className="object-contain scale-[1.35]"
                        loading="lazy"
                      />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-fun text-gray-800">{item.title}</h3>
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{ background: `${item.color}20`, color: item.color }}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Train End */}
          <AnimatedSection>
            <motion.div
              className="mt-10 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <motion.div
                  className="relative w-24 h-24 mx-auto"
                  animate={{ x: [0, -8, 0], y: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <Image
                    src="/images/journey-station-removebg-preview.png"
                    alt="Train Station"
                    fill
                    sizes="96px"
                    className="object-contain scale-[1.25]"
                    loading="lazy"
                  />
                </motion.div>
                <p className="text-sm text-gray-400 mt-2 font-medium">
                  Every station builds a brighter future! 🌟
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Nurturing Beyond Section — We Aim */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-transparent via-purple-50/20 to-transparent overflow-hidden">
        {/* Custom animations style */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes sunAnim {
            0%, 100% { transform: rotate(-6deg) scale(0.96); }
            50% { transform: rotate(6deg) scale(1.04); }
          }
          @keyframes rocketAnim {
            0%, 100% { transform: translateY(0) rotate(12deg); }
            50% { transform: translateY(-15px) rotate(22deg); }
          }
          @keyframes crabAnim {
            0%, 100% { transform: translateX(0) rotate(-6deg); }
            50% { transform: translateX(12px) rotate(6deg); }
          }
          .animate-sun-play {
            animation: sunAnim 4s ease-in-out infinite;
          }
          .animate-rocket-play {
            animation: rocketAnim 3s ease-in-out infinite;
          }
          .animate-crab-play {
            animation: crabAnim 3.5s ease-in-out infinite;
          }
        ` }} />

        {/* Floating Outline SVGs */}
        {/* Top Left: Smiling Sun */}
        <div className="absolute top-10 left-10 md:left-20 w-28 h-28 pointer-events-none opacity-80 animate-sun-play">
          <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="50" cy="50" r="20" />
            <circle cx="44" cy="46" r="1.5" fill="currentColor" />
            <circle cx="56" cy="46" r="1.5" fill="currentColor" />
            <path d="M43 56 Q50 62 57 56" />
            <line x1="50" y1="12" x2="50" y2="22" />
            <line x1="50" y1="78" x2="50" y2="88" />
            <line x1="12" y1="50" x2="22" y2="50" />
            <line x1="78" y1="50" x2="88" y2="50" />
            <line x1="23" y1="23" x2="30" y2="30" />
            <line x1="70" y1="70" x2="77" y2="77" />
            <line x1="77" y1="23" x2="70" y2="30" />
            <line x1="30" y1="70" x2="23" y2="77" />
          </svg>
        </div>

        {/* Top Right: Space Rocket */}
        <div className="absolute top-10 right-10 md:right-20 w-32 h-32 pointer-events-none opacity-80 animate-rocket-play">
          <svg viewBox="0 0 100 100" className="w-full h-full text-green-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 15 C60 30 60 55 58 70 L42 70 C40 55 40 30 50 15 Z" />
            <path d="M42 60 L32 70 L42 70 Z" />
            <path d="M58 60 L68 70 L58 70 Z" />
            <circle cx="50" cy="40" r="6" />
            <circle cx="80" cy="25" r="5" />
            <path d="M72 27 Q80 32 88 23" />
            <circle cx="45" cy="80" r="3" />
            <circle cx="55" cy="82" r="2.5" />
          </svg>
        </div>

        {/* Bottom Left: Blue Crab */}
        <div className="absolute bottom-10 left-10 md:left-20 w-28 h-28 pointer-events-none opacity-80 animate-crab-play">
          <svg viewBox="0 0 100 100" className="w-full h-full text-sky-400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="50" cy="60" rx="22" ry="14" />
            <circle cx="42" cy="40" r="4" />
            <line x1="42" y1="44" x2="42" y2="46" />
            <circle cx="58" cy="40" r="4" />
            <line x1="58" y1="44" x2="58" y2="46" />
            <path d="M44 64 Q50 68 56 64" />
            <path d="M30 54 Q20 46 22 36 Q30 34 34 44" />
            <path d="M70 54 Q80 46 78 36 Q70 34 66 44" />
            <path d="M34 66 Q24 72 26 78" />
            <path d="M38 72 Q30 80 34 84" />
            <path d="M66 66 Q76 72 74 78" />
            <path d="M62 72 Q70 80 66 84" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-bold text-pink-500 uppercase tracking-widest block mb-2">Nurturing Beyond</span>
            <h2 className="text-4xl md:text-5xl font-fun text-gray-800 mb-4">
              We Aim...
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              To build a playful learning environment that adapts all individual learners
              nourishing them with prospects to uplift their intrinsic potential.
            </p>

          </AnimatedSection>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column (World-Class Knowledge, Ultimate Safety) */}
            <div className="lg:col-span-4 space-y-12 order-1 lg:order-1">
              {/* World-Class Knowledge */}
              <AnimatedSection direction="left" className="flex items-start lg:items-center justify-end gap-4 text-right">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-purple-950 mb-2">World-Class Knowledge</h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    With years of understanding, we have set unmatched standards in Child Development & Education space.
                  </p>
                </div>
                <div className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 shadow-md border-4 border-green-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </AnimatedSection>

              {/* Ultimate Safety */}
              <AnimatedSection direction="left" className="flex items-start lg:items-center justify-end gap-4 text-right">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-purple-950 mb-2">Ultimate Safety</h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    An ideal learning environment with the safety of each child is our topmost priority.
                  </p>
                </div>
                <div className="w-14 h-14 rounded-full bg-rose-500 text-white flex items-center justify-center flex-shrink-0 shadow-md border-4 border-rose-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
              </AnimatedSection>
            </div>

            {/* Center Column (Image) */}
            <div className="lg:col-span-4 flex justify-center py-6 order-2 lg:order-2">
              <AnimatedSection className="relative w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-orange-100/30 rounded-full blur-2xl pointer-events-none" />
                <Image
                  src="/images/aim-child-removebg-preview.png"
                  alt="Child with binoculars"
                  fill
                  className="object-contain mix-blend-multiply"
                  sizes="(max-width: 768px) 288px, 320px"
                  loading="lazy"
                />
              </AnimatedSection>
            </div>

            {/* Right Column (Early Learning Programs, Fun At Learning) */}
            <div className="lg:col-span-4 space-y-12 order-3">
              {/* Early Learning Programs */}
              <AnimatedSection direction="right" className="flex items-start lg:items-center gap-4 text-left">
                <div className="w-14 h-14 rounded-full bg-sky-500 text-white flex items-center justify-center flex-shrink-0 shadow-md border-4 border-sky-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41a5.96 5.96 0 014.5 4.5l1.46 1.46z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-purple-950 mb-2">Early Learning Programs</h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    We are among the best kindergarten schools in Chennai, offering a wide array of early learning programs.
                  </p>
                </div>
              </AnimatedSection>

              {/* Fun At Learning */}
              <AnimatedSection direction="right" className="flex items-start lg:items-center gap-4 text-left">
                <div className="w-14 h-14 rounded-full bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-md border-4 border-amber-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-purple-950 mb-2">Fun At Learning</h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    We believe that each kid should have the chance to encounter the joy of discovery and create a love for learning.
                  </p>
                </div>
              </AnimatedSection>
            </div>
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
        aria-label="Back to top"
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
