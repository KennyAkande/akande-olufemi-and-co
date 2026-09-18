import type { Metadata } from 'next'
import Hero from '@/components/sections/hero'
import Navigation from '@/components/sections/navigation'
import About from '@/components/sections/about'
import Team from '@/components/sections/team'
import Services from '@/components/sections/services'
import WhyChooseUs from '@/components/sections/why-choose-us'
import Testimonials from '@/components/sections/testimonials'
import CtaBanner from '@/components/sections/cta-banner'
import Footer from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'Akande Olufemi & Co Partners | Premium Accounting & Financial Advisory',
  description:
    'Premium accounting, tax strategy, and financial advisory services for discerning clients in Lagos, Nigeria. 15+ years of excellence.',
}

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
      <CtaBanner
        primaryLabel="Schedule Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore Our Services"
        secondaryHref="/services"
      />
      <Footer />
    </main>
  )
}
