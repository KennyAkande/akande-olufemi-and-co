import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-bg.png"
        alt="Akande Olufemi & Co office"
        fill
        className="object-cover"
        priority
        quality={85}
      />

      {/* Gradient Overlay: Keeps the right side clear while giving left text dark contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="max-w-2xl">
          <div className="mb-6 inline-block">
            <div className="text-accent font-mono text-sm tracking-widest font-bold drop-shadow">
              PREMIUM ACCOUNTING SOLUTIONS
            </div>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6 font-bold leading-tight drop-shadow-md">
            Financial Excellence
            <span className="block text-accent">for Discerning Clients</span>
          </h1>

          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl leading-relaxed drop-shadow">
            Years of excellence in accounting, tax strategy, and financial advisory. We partner with successful businesses and individuals to optimize their financial future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-accent text-slate-950 font-heading font-bold rounded hover:bg-accent/90 transition-all hover:shadow-lg text-lg">
              Discover Our Services
            </button>
            <button className="px-8 py-3 border-2 border-accent text-accent font-heading font-bold rounded bg-black/30 backdrop-blur-sm hover:bg-accent hover:text-slate-950 transition-all text-lg">
              Schedule Consultation
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-heading font-bold text-accent mb-2 drop-shadow">15+</div>
              <div className="text-sm text-white/80 font-mono">Years in Practice</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-accent mb-2 drop-shadow">500+</div>
              <div className="text-sm text-white/80 font-mono">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-accent mb-2 drop-shadow">$1B+</div>
              <div className="text-sm text-white/80 font-mono">Assets Managed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}