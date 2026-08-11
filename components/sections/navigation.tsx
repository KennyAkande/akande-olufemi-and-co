'use client'

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border ledger-line">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <img 
            src="/logo2.png" 
            alt="Akande Olufemi & Co Emblem" 
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col">
            <div className="font-heading text-base font-bold text-secondary tracking-wide">AKANDE OLUFEMI</div>
            <div className="font-heading text-xs text-accent font-semibold tracking-widest">& CO</div>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-accent transition-colors text-base font-semibold"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('team')}
            className="text-foreground hover:text-accent transition-colors text-base font-semibold"
          >
            Team
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-accent transition-colors text-base font-semibold"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-accent transition-colors text-base font-semibold"
          >
            Contact
          </button>
        </div>

        {/* CTA BUTTON */}
        <button
          onClick={() => scrollToSection('contact')}
          className="px-6 py-2.5 bg-accent text-background font-semibold rounded hover:bg-accent/90 transition-colors text-base"
        >
          Get Started
        </button>
      </div>
    </nav>
  )
}