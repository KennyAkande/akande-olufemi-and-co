const services = [
  {
    name: 'Business Accounting',
    accountCode: '100',
    description: 'Comprehensive bookkeeping, financial reporting, and compliance services tailored to your business size and complexity.',
    features: ['Monthly Reconciliation', 'Financial Statements', 'Payroll Services', 'Business Tax Planning'],
  },
  {
    name: 'Tax Strategy & Compliance',
    accountCode: '200',
    description: 'Proactive tax planning and preparation for individuals and businesses, minimizing liability while ensuring compliance.',
    features: ['Income Tax Planning', 'Entity Structure Optimization', 'Quarterly Estimates', 'Audit Representation'],
  },
  {
    name: 'Financial Advisory',
    accountCode: '300',
    description: 'Strategic financial guidance for wealth building, investment planning, and long-term financial success.',
    features: ['Retirement Planning', 'Investment Analysis', 'Estate Planning', 'Risk Management'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-accent font-mono text-sm tracking-widest mb-4 inline-block">OUR SERVICES</div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            From compliance to strategy, we provide complete accounting and advisory services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.accountCode}
              className="group bg-background border border-accent/20 hover:border-accent/50 transition-all rounded-lg p-8 hover:shadow-lg"
            >
              {/* Account Code Header */}
              <div className="flex items-start justify-between mb-6 pb-4 border-b-2 border-accent/20">
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{service.name}</h3>
                </div>
                <div className="text-right">
                  <div className="account-code">{service.accountCode}</div>
                  <div className="text-xs text-muted-foreground font-mono">Account</div>
                </div>
              </div>

              <p className="text-foreground/70 mb-6 text-sm leading-relaxed">{service.description}</p>

              <div className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full px-4 py-2 border border-accent text-accent font-medium rounded hover:bg-accent/10 transition-colors text-sm">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Ledger-style divider */}
        <div className="mt-16 pt-16 border-t-4 border-accent/30">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="py-8">
              <div className="font-mono text-xs text-accent mb-3 uppercase tracking-widest">Service Scope</div>
              <p className="text-foreground font-heading font-bold">Individuals & Businesses</p>
            </div>
            <div className="py-8 border-x border-accent/10">
              <div className="font-mono text-xs text-accent mb-3 uppercase tracking-widest">Industry Expertise</div>
              <p className="text-foreground font-heading font-bold">20+ Industries</p>
            </div>
            <div className="py-8">
              <div className="font-mono text-xs text-accent mb-3 uppercase tracking-widest">Consultation</div>
              <p className="text-foreground font-heading font-bold">Free Initial Review</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
