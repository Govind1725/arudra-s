'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import Card3D from '@/components/Card3D'

const WHATSAPP_URL = 'https://wa.me/917092940935'

const contactInfo = [
  { emoji: '📍', title: 'Visit Us', content: '123 Sunshine Lane\nKids City, KC 12345', color: '#FF6B9D' },
  { emoji: '📞', title: 'Call / WhatsApp', content: '+91 70929 40935\nMon-Fri: 8AM - 6PM', color: '#25D366', action: WHATSAPP_URL },
  { emoji: '✉️', title: 'Email Us', content: 'hello@arudraspreschool.com\nWe reply within 24 hours', color: '#A78BFA' },
  { emoji: '💬', title: 'WhatsApp', content: 'Chat with us instantly!\nQuick replies guaranteed', color: '#25D366', action: WHATSAPP_URL },
]

const faqs = [
  { q: 'What is the teacher-to-student ratio?', a: 'We maintain a low 1:6 ratio for toddlers and 1:8 for preschoolers to ensure individual attention.' },
  { q: 'What are your operating hours?', a: 'We are open Monday through Friday, 8:00 AM to 5:30 PM. Extended care is available until 6:00 PM.' },
  { q: 'Is there a trial period?', a: 'Yes! We offer a one-week trial period to ensure your child feels comfortable and happy.' },
  { q: 'What safety measures do you have?', a: 'Our facility is 24/7 monitored, has secure entry systems, and all staff are CPR/First-Aid certified.' },
  { q: 'Do you provide meals?', a: 'We provide nutritious morning and afternoon snacks. Lunch is available as an optional add-on.' },
  { q: 'What is your admission process?', a: 'Schedule a tour, meet our team, complete the enrollment form, and your child can start within a week!' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="pt-24 pb-16">
      <section className="relative px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contact</span>
            <h1 className="text-4xl md:text-5xl font-fun text-gray-800 mt-3 mb-4">
              Let&apos;s{' '}
              <span className="gradient-text">Connect!</span>
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              We&apos;d love to hear from you! Reach out to schedule a tour or ask any questions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card3D>
                  <motion.div
                    className="p-6 bg-white rounded-2xl shadow-soft border border-pink-50 text-center"
                    whileHover={{ y: -5 }}
                  >
                    <motion.span
                      className="text-3xl block mb-3"
                      whileHover={{ scale: 1.2 }}
                    >
                      {info.emoji}
                    </motion.span>
                    <h3 className="font-semibold text-gray-800 mb-2">{info.title}</h3>
                    <p className="text-gray-500 text-sm whitespace-pre-line">{info.content}</p>
                  </motion.div>
                </Card3D>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <Card3D>
                <form
                  onSubmit={handleSubmit}
                  className="p-8 bg-white rounded-2xl shadow-soft border border-pink-50 space-y-5"
                >
                  <h2 className="text-2xl font-fun text-gray-800 mb-2">Send us a Message</h2>
                  <p className="text-gray-400 text-sm mb-6">
                    Fill out the form and we&apos;ll get back to you within 24 hours.
                  </p>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-pink-50/30"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-pink-50/30"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-pink-50/30"
                      placeholder="Enter your phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-pink-50/30 resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 rounded-xl gradient-primary text-white font-semibold shadow-lg"
                  >
                    {submitted ? '✓ Message Sent!' : '✉️ Send Message'}
                  </motion.button>
                </form>
              </Card3D>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-6">
                <Card3D>
                  <div className="p-8 bg-white rounded-2xl shadow-soft border border-pink-50">
                    <h2 className="text-2xl font-fun text-gray-800 mb-6">
                      Frequently Asked{' '}
                      <span className="gradient-text">Questions</span>
                    </h2>
                    <div className="space-y-4">
                      {faqs.map((faq, i) => (
                        <motion.details
                          key={i}
                          className="group"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <summary className="flex items-center justify-between cursor-pointer text-gray-700 font-medium py-3 border-b border-pink-50 group-open:text-primary transition-colors">
                            <span>{faq.q}</span>
                            <motion.span
                              className="text-lg"
                              animate={{ rotate: 0 }}
                              whileHover={{ rotate: 180 }}
                            >
                              ▼
                            </motion.span>
                          </summary>
                          <p className="py-3 text-gray-500 text-sm leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.details>
                      ))}
                    </div>
                  </div>
                </Card3D>

                <Card3D>
                  <div
                    className="p-8 rounded-2xl text-center"
                    style={{
                      background: 'linear-gradient(135deg, #FF6B9D, #FFB347)',
                    }}
                  >
                    <span className="text-4xl block mb-3">🌟</span>
                    <h3 className="text-xl font-fun text-white mb-2">Ready for a Tour?</h3>
                    <p className="text-white/80 text-sm mb-4">
                      Come see our facility and meet our wonderful teachers!
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-full bg-white text-primary font-semibold text-sm shadow-lg"
                    >
                      📅 Schedule a Visit
                    </motion.button>
                  </div>
                </Card3D>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
