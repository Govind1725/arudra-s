'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  const links = {
    QuickLinks: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About Us' },
      { href: '/programs', label: 'Programs' },
      { href: '/gallery', label: 'Gallery' },
      { href: '/contact', label: 'Contact' },
    ],
    Programs: [
      { href: '/programs', label: 'Toddler (18-24 mo)' },
      { href: '/programs', label: 'Preschool (2-3 yrs)' },
      { href: '/programs', label: 'Pre-K (4-5 yrs)' },
      { href: '/programs', label: 'After School' },
    ],
    Contact: [
      { href: '#', label: '📍 123 Sunshine Lane, Kids City' },
      { href: '#', label: '📞 (555) 123-4567' },
      { href: '#', label: '✉️ hello@arudraspreschool.com' },
    ],
  }

  return (
    <footer className="relative bg-gradient-to-b from-[#FFF8F0] to-[#FFE4E1] pt-20 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2 gradient-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo-main.png"
                alt="Arudra's Pre-School Logo"
                width={160}
                height={70}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Where imaginations soar, friendships bloom, and every child discovers the joy of learning!
            </p>
            <div className="flex gap-3">
              {['📘', '📷', '🎵', '📺'].map((icon, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-lg hover:shadow-lg transition-all"
                >
                  {icon}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {Object.entries(links).map(([title, items], idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="font-fun text-lg text-gray-800 mb-4">{title}</h3>
              <ul className="space-y-3">
                {items.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-gray-500 hover:text-primary text-sm transition-colors flex items-center gap-2"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-pink-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Arudra&apos;s Little Stars Preschool. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-6xl opacity-5 pointer-events-none select-none font-fun">
        Arudra&apos;s Preschool
      </div>
    </footer>
  )
}
