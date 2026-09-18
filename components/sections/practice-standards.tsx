const standards = [
  { title: 'Tax & Compliance', sub: 'CITN Accredited Practice' },
  { title: 'Audit & Assurance', sub: 'ICAN Certified Standards' },
  { title: 'Corporate Advisory', sub: 'Strategic Planning' },
  { title: 'Financial Reporting', sub: 'IFRS Compliant' },
]

export default function PracticeStandards({ bare = false }: { bare?: boolean }) {
  const grid = (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {standards.map((item, idx) => (
        <div
          key={idx}
          className="p-6 bg-background rounded-lg border border-accent/20 text-center hover:border-accent/50 transition-colors shadow-sm"
        >
          <div className="text-foreground font-heading font-bold text-xl mb-1.5">{item.title}</div>
          <div className="text-accent font-mono text-sm font-semibold">{item.sub}</div>
        </div>
      ))}
    </div>
  )

  if (bare) return grid

  return (
    <div className="mt-16 pt-12 border-t border-accent/20">
      <p className="text-center text-accent font-mono text-base font-bold uppercase tracking-widest mb-8">
        OUR CORE PRACTICE STANDARDS
      </p>
      {grid}
    </div>
  )
}
