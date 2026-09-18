import Link from 'next/link'
import { services } from './services'

type ProcessStep = { title: string; description: string }
type Faq = { question: string; answer: string }

export default function ServiceDetail({
  accountCode,
  name,
  intro,
  included,
  process,
  whoItsFor,
  faqs,
  currentSlug,
}: {
  accountCode: string
  name: string
  intro: string
  included: { title: string; description: string }[]
  process: ProcessStep[]
  whoItsFor: string[]
  faqs: Faq[]
  currentSlug: string
}) {
  const related = services.filter((s) => s.slug !== currentSlug)

  return (
    <>
      {/* Intro */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="account-code">{accountCode}</div>
            <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Service Account</div>
          </div>
          <p className="text-foreground/80 text-lg leading-relaxed">{intro}</p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-accent font-mono text-sm tracking-widest mb-4 inline-block">WHAT&rsquo;S INCLUDED</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Everything Covered Under {name}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {included.map((item) => (
              <div key={item.title} className="p-6 bg-background border border-accent/20 rounded-lg">
                <h3 className="font-heading font-bold text-foreground mb-2 text-lg">{item.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-accent font-mono text-sm tracking-widest mb-4 inline-block">HOW IT WORKS</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, idx) => (
              <div key={step.title} className="relative">
                <div className="font-heading text-4xl font-bold text-accent/30 mb-3">{String(idx + 1).padStart(2, '0')}</div>
                <h3 className="font-heading font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-accent font-mono text-sm tracking-widest mb-4">IS THIS RIGHT FOR YOU?</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">Who This Service Is For</h2>
          <div className="space-y-4">
            {whoItsFor.map((item) => (
              <div key={item} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <p className="text-foreground/80 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-accent font-mono text-sm tracking-widest mb-4 inline-block">FAQ</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Common Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-6 bg-card border border-accent/20 rounded-lg">
                <h3 className="font-heading font-bold text-foreground mb-2">{faq.question}</h3>
                <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-accent font-mono text-sm tracking-widest mb-8 text-center">OTHER SERVICES</div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group p-6 bg-background border border-accent/20 hover:border-accent/50 rounded-lg transition-all flex items-center justify-between"
              >
                <span className="font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                  {s.name}
                </span>
                <span className="text-accent">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
