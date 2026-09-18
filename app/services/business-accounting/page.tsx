import type { Metadata } from 'next'
import Navigation from '@/components/sections/navigation'
import PageHeader from '@/components/sections/page-header'
import ServiceDetail from '@/components/sections/service-detail'
import CtaBanner from '@/components/sections/cta-banner'
import Footer from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'Business Accounting | Akande Olufemi & Co Partners',
  description:
    'Comprehensive bookkeeping, financial reporting, payroll, and compliance services tailored to your business size and complexity.',
}

export default function BusinessAccountingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        eyebrow="SERVICE 100"
        title="Business Accounting"
        description="Comprehensive bookkeeping, financial reporting, and compliance services tailored to your business size and complexity."
        breadcrumb="Business Accounting"
      />
      <ServiceDetail
        accountCode="100"
        name="Business Accounting"
        currentSlug="business-accounting"
        intro="Every strong financial strategy starts with clean, accurate books. Our business accounting service handles the day-to-day and month-to-month work of running your finances, so you always know where you stand and never miss a filing deadline."
        included={[
          { title: 'Monthly Reconciliation', description: 'Bank and card statements matched against your books every month, with discrepancies flagged and resolved.' },
          { title: 'Financial Statements', description: 'Profit & loss, balance sheet, and cash flow statements prepared on a regular schedule you can rely on.' },
          { title: 'Payroll Services', description: 'Accurate, on-time payroll processing including statutory deductions and remittances.' },
          { title: 'Business Tax Planning', description: 'Ongoing coordination with our tax team so your books stay filing-ready year-round.' },
        ]}
        process={[
          { title: 'Onboarding', description: 'We review your current books, systems, and prior filings to understand where things stand.' },
          { title: 'Setup', description: 'We set up or clean up your chart of accounts and bookkeeping workflow.' },
          { title: 'Monthly Cycle', description: 'Transactions are reconciled and statements prepared on a consistent monthly schedule.' },
          { title: 'Review', description: 'We walk through your numbers with you and flag anything that needs attention.' },
        ]}
        whoItsFor={[
          'Small and mid-sized businesses that need dependable monthly books without hiring an in-house accountant.',
          'Growing companies that have outgrown spreadsheets and need proper financial statements.',
          'Business owners who want payroll handled correctly and on time, every time.',
        ]}
        faqs={[
          {
            question: 'How often will I receive financial statements?',
            answer: 'Monthly by default. We can adjust the cadence based on the complexity and size of your business.',
          },
          {
            question: 'Can you take over from our current bookkeeper?',
            answer: 'Yes \u2014 we regularly onboard businesses mid-year and handle the transition, including reconciling any backlog.',
          },
          {
            question: 'Do you handle payroll for remote or contract staff?',
            answer: 'Yes, we can structure payroll for full-time staff, contractors, and hybrid teams in line with current regulations.',
          },
        ]}
      />
      <CtaBanner
        title="Let's Get Your Books in Order"
        description="Tell us about your business and we'll put together a plan that fits your size and complexity."
      />
      <Footer />
    </main>
  )
}
