import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-bg.png"
        alt="Heritage Accounting Partners office"
        fill
        className="object-cover"
        priority
        quality={85}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/15" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <div className="mb-6 inline-block">
            <div className="text-accent font-mono text-sm tracking-widest">PREMIUM ACCOUNTING SOLUTIONS</div>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-6 font-bold leading-tight">
            Financial Excellence
            <span className="block text-accent">for Discerning Clients</span>
          </h1>

          <p className="text-foreground/80 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
            Years of excellence in accounting, tax strategy, and financial advisory. We partner with successful businesses and individuals to optimize their financial future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-accent text-background font-heading font-bold rounded hover:bg-accent/90 transition-all hover:shadow-lg text-lg">
              Discover Our Services
            </button>
            <button className="px-8 py-3 border-2 border-accent text-accent font-heading font-bold rounded hover:bg-accent/10 transition-all text-lg">
              Schedule Consultation
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-accent/20">
            <div>
              <div className="text-3xl font-heading font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-foreground/60 font-mono">Years in Practice</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-foreground/60 font-mono">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-accent mb-2">$1B+</div>
              <div className="text-sm text-foreground/60 font-mono">Assets Managed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
