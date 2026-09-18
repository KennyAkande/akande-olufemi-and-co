import Image from 'next/image'
import Link from 'next/link'

export default function CtaBanner({
  title = 'Ready to Optimize Your Financial Strategy?',
  description = "Reach out to our team for a personalized consultation. We'll discuss your goals and show you how we can help.",
  primaryLabel = 'Schedule Consultation',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
}: {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden ledger-line">
      <Image src="/hero-bg.png" alt="" fill className="object-cover" quality={85} />
      <div className="absolute inset-0 bg-black/75 pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 text-balance">{title}</h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="px-8 py-3.5 bg-accent text-slate-950 font-heading font-bold rounded hover:bg-accent/90 transition-all hover:shadow-lg text-lg"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="px-8 py-3.5 border-2 border-accent text-accent font-heading font-bold rounded bg-black/10 backdrop-blur-sm hover:bg-accent hover:text-slate-950 transition-all text-lg"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
