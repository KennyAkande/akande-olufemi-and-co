import type { Metadata } from 'next'
import Navigation from '@/components/sections/navigation'
import PageHeader from '@/components/sections/page-header'
import ServiceDetail from '@/components/sections/service-detail'
import CtaBanner from '@/components/sections/cta-banner'
import Footer from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'Tax Strategy & Compliance | Akande Olufemi & Co Partners',
  description:
    'Proactive tax planning and preparation for individuals and businesses, minimizing liability while ensuring full compliance.',
}

export default function TaxStrategyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        eyebrow="SERVICE 200"
        title="Tax Strategy & Compliance"
        description="Proactive tax planning and preparation for individuals and businesses, minimizing liability while ensuring compliance."
        breadcrumb="Tax Strategy & Compliance"
      />
      <ServiceDetail
        accountCode="200"
        name="Tax Strategy & Compliance"
        currentSlug="tax-strategy-compliance"
        intro="Tax season shouldn't be a scramble, and tax strategy shouldn't be an afterthought. We build proactive plans throughout the year that reduce your liability legally and keep you fully compliant with changing regulations."
        included={[
          { title: 'Income Tax Planning', description: 'Year-round planning to structure income, deductions, and timing in your favor before deadlines arrive.' },
          { title: 'Entity Structure Optimization', description: 'Review of your business structure to ensure it\u2019s the most tax-efficient setup for your situation.' },
          { title: 'Quarterly Estimates', description: 'Accurate estimated tax calculations so you avoid underpayment penalties and cash flow surprises.' },
          { title: 'Audit Representation', description: 'If you\u2019re ever audited, we represent you directly and manage correspondence with tax authorities.' },
        ]}
        process={[
          { title: 'Assessment', description: 'We review prior filings, current structure, and upcoming income to spot opportunities and risks.' },
          { title: 'Strategy', description: 'We build a tax plan tailored to your goals, not a generic template.' },
          { title: 'Filing', description: 'Returns are prepared and filed accurately and on time, every time.' },
          { title: 'Year-Round Support', description: 'We stay engaged after filing season to adjust strategy as your situation changes.' },
        ]}
        whoItsFor={[
          'Business owners looking to legally minimize their tax burden through better structuring and timing.',
          'High-net-worth individuals with complex income sources who need proactive, not reactive, tax planning.',
          'Anyone who has received an audit notice or wants representation for a prior filing.',
        ]}
        faqs={[
          {
            question: 'Is tax planning different from tax preparation?',
            answer: 'Yes. Preparation is filing what already happened. Planning is making decisions throughout the year that reduce what you\u2019ll owe.',
          },
          {
            question: 'Can you help if I\u2019m already under audit?',
            answer: 'Yes, we provide direct representation and handle communication with tax authorities on your behalf.',
          },
          {
            question: 'Do you work with businesses across different industries?',
            answer: 'Yes, our team has experience across 20+ industries and tailors strategy to industry-specific rules and opportunities.',
          },
        ]}
      />
      <CtaBanner
        title="Stop Overpaying on Taxes"
        description="Get a proactive tax strategy built around your specific situation, not a one-size-fits-all checklist."
      />
      <Footer />
    </main>
  )
}
