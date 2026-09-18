import type { Metadata } from 'next'
import Navigation from '@/components/sections/navigation'
import PageHeader from '@/components/sections/page-header'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'Contact Us | Akande Olufemi & Co Partners',
  description:
    'Schedule a consultation with Akande Olufemi & Co. Reach us by phone, email, or our office in Omole Phase 1, Lagos.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        eyebrow="GET IN TOUCH"
        title="Schedule Your Consultation"
        description="Ready to optimize your financial strategy? Reach out to our team for a personalized consultation. We'll discuss your goals and show you how we can help."
        breadcrumb="Contact"
      />
      <Contact />
      <Footer />
    </main>
  )
}
