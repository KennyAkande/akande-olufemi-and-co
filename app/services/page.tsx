import type { Metadata } from 'next'
import Navigation from '@/components/sections/navigation'
import PageHeader from '@/components/sections/page-header'
import Services from '@/components/sections/services'
import WhyChooseUs from '@/components/sections/why-choose-us'
import CtaBanner from '@/components/sections/cta-banner'
import Footer from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'Services | Akande Olufemi & Co Partners',
  description:
    'Business accounting, tax strategy & compliance, and financial advisory services for individuals and businesses.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        eyebrow="OUR SERVICES"
        title="Comprehensive Financial Solutions"
        description="From day-to-day bookkeeping to long-term wealth strategy, we provide complete accounting and advisory services for individuals and businesses."
        breadcrumb="Services"
      />
      <Services />
      <WhyChooseUs />
      <CtaBanner secondaryLabel="Ask Us a Question" secondaryHref="/contact" />
      <Footer />
    </main>
  )
}
