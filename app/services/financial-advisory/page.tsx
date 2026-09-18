import type { Metadata } from 'next'
import Navigation from '@/components/sections/navigation'
import PageHeader from '@/components/sections/page-header'
import ServiceDetail from '@/components/sections/service-detail'
import CtaBanner from '@/components/sections/cta-banner'
import Footer from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'Financial Advisory | Akande Olufemi & Co Partners',
  description:
    'Strategic financial guidance for wealth building, investment planning, retirement, and long-term financial success.',
}

export default function FinancialAdvisoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        eyebrow="SERVICE 300"
        title="Financial Advisory"
        description="Strategic financial guidance for wealth building, investment planning, and long-term financial success."
        breadcrumb="Financial Advisory"
      />
      <ServiceDetail
        accountCode="300"
        name="Financial Advisory"
        currentSlug="financial-advisory"
        intro="Beyond compliance and bookkeeping, real financial success comes from a long-term strategy. Our advisory service looks at the full picture \u2014 your income, assets, goals, and risks \u2014 to build a roadmap for lasting financial security."
        included={[
          { title: 'Retirement Planning', description: 'Projections and savings strategies tailored to when and how you want to retire.' },
          { title: 'Investment Analysis', description: 'Review of your current investments and recommendations aligned with your risk tolerance and goals.' },
          { title: 'Estate Planning', description: 'Coordination with legal counsel to structure your estate and protect what you\u2019ve built.' },
          { title: 'Risk Management', description: 'Identifying gaps in insurance and financial protection before they become costly problems.' },
        ]}
        process={[
          { title: 'Discovery', description: 'We start with a deep conversation about your goals, timeline, and current financial picture.' },
          { title: 'Analysis', description: 'We model out scenarios across retirement, investment, and estate planning.' },
          { title: 'Roadmap', description: 'You receive a clear, prioritized plan \u2014 not just a list of generic recommendations.' },
          { title: 'Ongoing Guidance', description: 'We review and adjust the plan as your life and goals evolve.' },
        ]}
        whoItsFor={[
          'Individuals and families planning for retirement who want a clear, realistic roadmap.',
          'Business owners who need to separate personal wealth strategy from business finances.',
          'Anyone who wants a second opinion on their current investment or estate plan.',
        ]}
        faqs={[
          {
            question: 'Do I need to already have investments to start?',
            answer: 'No. We work with clients at every stage, from building a first savings strategy to managing an existing portfolio.',
          },
          {
            question: 'Do you manage investments directly?',
            answer: 'We provide analysis and strategy; for execution, we coordinate with your existing investment accounts or licensed partners as needed.',
          },
          {
            question: 'How often do we review the plan together?',
            answer: 'Typically annually, or more often if your income, goals, or family situation changes significantly.',
          },
        ]}
      />
      <CtaBanner
        title="Start Building Your Long-Term Strategy"
        description="Book a free initial review and let's talk about where you want your finances to be in 5, 10, and 20 years."
      />
      <Footer />
    </main>
  )
}
