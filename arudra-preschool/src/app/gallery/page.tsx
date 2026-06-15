'use client'

import AnimatedSection from '@/components/AnimatedSection'
import GalleryGrid from '@/components/GalleryGrid'

export default function Gallery() {
  return (
    <div className="pt-24 pb-16">
      <section className="relative px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Gallery</span>
            <h1 className="text-4xl md:text-5xl font-fun text-gray-800 mt-3 mb-4">
              Moments of{' '}
              <span className="gradient-text">Joy & Learning</span>
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              A glimpse into the fun-filled world of Arudra&apos;s Little Stars Preschool.
            </p>
          </AnimatedSection>

          <GalleryGrid />
        </div>
      </section>
    </div>
  )
}
