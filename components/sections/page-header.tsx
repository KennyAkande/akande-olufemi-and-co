import Image from 'next/image'
import Link from 'next/link'

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string
  title: string
  description?: string
  breadcrumb?: string
}) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden ledger-line">
      <Image src="/hero-bg.png" alt="" fill priority className="object-cover" quality={85} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-sm font-mono text-accent/80 mb-6">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          {breadcrumb && (
            <>
              <span className="text-white/30">/</span>
              <span className="text-white/70">{breadcrumb}</span>
            </>
          )}
        </div>
        <div className="text-accent font-mono text-sm tracking-widest mb-4">{eyebrow}</div>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  )
}
