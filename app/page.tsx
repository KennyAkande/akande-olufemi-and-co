'use client'

import Hero from '@/components/sections/hero'
import Navigation from '@/components/sections/navigation'
import About from '@/components/sections/about'
import Team from '@/components/sections/team'
import Services from '@/components/sections/services'
import WhyChooseUs from '@/components/sections/why-choose-us'
import Testimonials from '@/components/sections/testimonials'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Team />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
