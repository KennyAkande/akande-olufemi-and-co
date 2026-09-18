import type { Metadata } from 'next'
import Navigation from '@/components/sections/navigation'
import PageHeader from '@/components/sections/page-header'
import About from '@/components/sections/about'
import PracticeStandards from '@/components/sections/practice-standards'
import CtaBanner from '@/components/sections/cta-banner'
import Footer from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'About Us | Akande Olufemi & Co Partners',
  description:
    'Founded in 2007, Akande Olufemi & Co has grown into a trusted accounting and financial advisory practice built on transparency, expertise, and partnership.',
}

const milestones = [
  {
    year: '2007',
    title: 'The Firm is Founded',
    description: 'Akande Olufemi opens the practice with a small roster of local business clients, focused on hands-on bookkeeping and tax compliance.',
  },
  {
    year: '2013',
    title: 'Advisory Services Launch',
    description: 'The firm expands beyond compliance into strategic financial advisory, adding retirement and investment planning for growing clients.',
  },
  {
    year: '2018',
    title: 'Partnership Structure Formed',
    description: 'Ogedengbe Blessing and Ogunyooye Dupe join as partners, broadening the firm\u2019s expertise in financial planning and complex tax matters.',
  },
  {
    year: '2026',
    title: 'Today',
    description: 'A multi-partner practice serving individuals and businesses across 20+ industries, with 500+ clients and over $1B in assets under advisory.',
  },
]

const values = [
  {
    title: 'Transparency',
    description: 'Clear communication about fees, strategy, and outcomes \u2014 no surprises, ever.',
  },
  {
    title: 'Expertise',
    description: 'Every partner and senior accountant holds recognized professional credentials, kept current through ongoing training.',
  },
  {
    title: 'Partnership',
    description: 'We measure success by our clients\u2019 outcomes, not just hours billed or forms filed.',
  },
  {
    title: 'Integrity',
    description: 'We give the advice that\u2019s right for your situation, even when it\u2019s not the easiest answer.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        eyebrow="ABOUT THE FIRM"
        title="Trusted Partners in Financial Success"
        description="Founded in 2007, Akande Olufemi & Co has grown into one of the region's leading accounting and financial advisory practices."
        breadcrumb="About"
      />
      <About />

      {/* Mission & Values */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-accent font-mono text-sm tracking-widest mb-4 inline-block">WHAT WE STAND FOR</div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              The principles that guide every engagement, every recommendation, every client relationship
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-card border border-accent/20 hover:border-accent/50 hover:shadow-lg transition-all rounded-lg"
              >
                <h3 className="font-heading font-bold text-foreground mb-2 text-lg">{value.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-accent font-mono text-sm tracking-widest mb-4 inline-block">OUR STORY</div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Nearly Two Decades of Growth</h2>
          </div>
          <div className="space-y-10">
            {milestones.map((m, idx) => (
              <div key={m.year} className="flex gap-6 md:gap-10">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-accent/15 border-2 border-accent flex items-center justify-center font-heading font-bold text-accent text-sm">
                    {m.year}
                  </div>
                  {idx < milestones.length - 1 && <div className="w-px flex-1 bg-accent/20 mt-2" />}
                </div>
                <div className="pb-10">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{m.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-accent font-mono text-base font-bold uppercase tracking-widest mb-8">
            Our Core Practice Standards
          </p>
          <PracticeStandards bare />
        </div>
      </section>

      <CtaBanner
        title="Want to Meet the Team Behind the Numbers?"
        description="Get to know the partners who'll be managing your financial strategy."
        primaryLabel="Meet Our Team"
        primaryHref="/team"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
      <Footer />
    </main>
  )
}
