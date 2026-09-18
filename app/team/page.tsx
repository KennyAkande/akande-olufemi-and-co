import type { Metadata } from 'next'
import Navigation from '@/components/sections/navigation'
import PageHeader from '@/components/sections/page-header'
import Team from '@/components/sections/team'
import CtaBanner from '@/components/sections/cta-banner'
import Footer from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'Our Team | Akande Olufemi & Co Partners',
  description:
    'Meet the partners of Akande Olufemi & Co \u2014 credentialed accountants and advisors with decades of combined experience.',
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        eyebrow="OUR TEAM"
        title="Meet Our Partners"
        description="Experienced professionals dedicated to your financial success, with decades of combined expertise across tax, audit, and advisory."
        breadcrumb="Team"
      />
      <Team />

      {/* Careers teaser */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-accent font-mono text-sm tracking-widest mb-4">JOIN THE FIRM</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            We&rsquo;re Always Looking for Great People
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed mb-8">
            If you&rsquo;re a credentialed accountant or advisor who shares our commitment to client-first service, we&rsquo;d love to hear from you.
          </p>
          <a
            href="mailto:info@akandeolufemi.com?subject=Career%20Inquiry"
            className="inline-block px-8 py-3.5 border-2 border-accent text-accent font-heading font-bold rounded hover:bg-accent hover:text-slate-950 transition-all text-lg"
          >
            Send Us Your CV
          </a>
          <p className="text-foreground/50 text-sm mt-4">
            Or email us directly at{' '}
            <a href="mailto:info@akandeolufemi.com" className="text-accent hover:underline">
              info@akandeolufemi.com
            </a>
          </p>
        </div>
      </section>

      <CtaBanner
        title="Ready to Work With Our Team?"
        description="Schedule a consultation and tell us about your financial goals."
      />
      <Footer />
    </main>
  )
}
