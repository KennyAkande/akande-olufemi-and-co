'use client'

import { useState } from 'react'

const testimonials = [
  {
    quote: 'Akande Olufemi & Co transformed our approach to tax planning. Within the first year, they identified opportunities that saved us over $100K annually. Their proactive strategy has become invaluable to our business.',
    author: 'Michael Rodriguez',
    title: 'CEO, Tech Solutions Inc.',
    rating: 5,
  },
  {
    quote: 'Working with the team at Akande Olufemi & Co has given me peace of mind. They handle all the complexity while keeping me informed at every step. Truly exceptional service and expertise.',
    author: 'Rebecca Williams',
    title: 'Founder, Design Studio',
    rating: 5,
  },
  {
    quote: 'What sets Akande Olufemi & Co apart is their commitment to understanding our business, not just our numbers. They\'ve become trusted advisors, not just accountants. Highly recommended.',
    author: 'David Chen',
    title: 'Partner, Investment Group',
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-accent font-mono text-sm tracking-widest mb-4 inline-block">TESTIMONIALS</div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Real feedback from the businesses and individuals we've partnered with
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-background border-2 border-accent/30 p-8 md:p-12 rounded-lg">
            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                <span key={i} className="text-accent text-lg">
                  ★
                </span>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-2xl text-foreground mb-8 leading-relaxed font-heading">
              &ldquo;{testimonials[activeIndex].quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="border-t border-accent/20 pt-6">
              <div className="font-heading font-bold text-foreground mb-1">{testimonials[activeIndex].author}</div>
              <div className="text-accent font-mono text-sm">{testimonials[activeIndex].title}</div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded border border-accent/50 hover:border-accent text-foreground hover:text-accent transition-colors flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === activeIndex ? 'bg-accent w-8' : 'bg-accent/30 hover:bg-accent/50'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              className="w-10 h-10 rounded border border-accent/50 hover:border-accent text-foreground hover:text-accent transition-colors flex items-center justify-center"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        {/* Client Logos Placeholder */}
        <div className="mt-16 pt-12 border-t border-accent/20">
          <p className="text-center text-foreground/60 text-sm font-mono uppercase tracking-widest mb-8">
            Trusted By Leading Organizations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[1, 2, 3, 4].map((idx) => (
              <div key={idx} className="h-12 bg-background rounded border border-accent/20 flex items-center justify-center">
                <div className="text-accent font-heading font-bold">Client {idx}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
