'use client'

import { useEffect, useState } from 'react'

const reasons = [
  {
    icon: '📊',
    title: 'Proactive Strategy',
    description: 'We don\'t just prepare taxes—we build comprehensive strategies that minimize liability and maximize opportunities.',
  },
  {
    icon: '🤝',
    title: 'Personalized Attention',
    description: 'Direct access to partners, not rotation of junior staff. You get consistent relationships and deep knowledge of your situation.',
  },
  {
    icon: '🛡️',
    title: 'Compliance Excellence',
    description: 'Zero missed deadlines. We stay current with changing regulations to ensure complete compliance and peace of mind.',
  },
  {
    icon: '💡',
    title: 'Industry Insight',
    description: 'With experience across diverse industries, we understand your unique challenges and opportunities better than generalists.',
  },
  {
    icon: '📈',
    title: 'Growth Planning',
    description: 'From startup to scaling, we provide financial roadmaps that support sustainable growth and profitability.',
  },
  {
    icon: '⏰',
    title: 'Efficiency First',
    description: 'Modern technology and streamlined processes mean faster turnaround times and lower costs than traditional firms.',
  },
]

export default function WhyChooseUs() {
  const [counts, setCounts] = useState([0, 0, 0, 0])

  useEffect(() => {
    const counters = [500, 30, 95, 2000]
    const intervals = counters.map((target, idx) => {
      let current = 0
      return setInterval(() => {
        current += Math.ceil(target / 30)
        if (current >= target) {
          current = target
          clearInterval(intervals[idx])
        }
        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[idx] = current
          return newCounts
        })
      }, 30)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-accent font-mono text-sm tracking-widest mb-4 inline-block">WHY CHOOSE US</div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Heritage Difference
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Excellence in service, expertise in practice, results that matter
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="group p-6 bg-card border border-accent/20 hover:border-accent/50 hover:shadow-lg transition-all rounded-lg"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">{reason.icon}</div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-2 text-lg">{reason.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section with Counter */}
        <div className="bg-card border-4 border-accent/30 ledger-double p-12 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center py-4 border-r border-accent/10 md:border-r-0">
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                {counts[0]}+
              </div>
              <div className="text-sm text-foreground/60 font-mono uppercase tracking-wider">Clients Served</div>
            </div>
            <div className="text-center py-4 border-r border-accent/10 md:border-r-0">
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                {counts[1]}
              </div>
              <div className="text-sm text-foreground/60 font-mono uppercase tracking-wider">Years Established</div>
            </div>
            <div className="text-center py-4 border-r border-accent/10 md:border-r-0">
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                {counts[2]}%
              </div>
              <div className="text-sm text-foreground/60 font-mono uppercase tracking-wider">Client Retention</div>
            </div>
            <div className="text-center py-4">
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                ${counts[3]}M
              </div>
              <div className="text-sm text-foreground/60 font-mono uppercase tracking-wider">Assets Managed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
