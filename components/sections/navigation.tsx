'use client'

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border ledger-line">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <img 
            src="/logo2.png" 
            alt="Akande Olufemi & Co Emblem" 
            className="w-12 h-12 object-contain"
          />
          <div className="flex flex-col">
            <div className="font-heading text-lg font-bold text-secondary tracking-wide">AKANDE OLUFEMI</div>
            <div className="font-heading text-sm text-accent font-bold tracking-widest">& CO</div>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex gap-10">
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-accent transition-colors text-xl font-bold"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('team')}
            className="text-foreground hover:text-accent transition-colors text-xl font-bold"
          >
            Team
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-accent transition-colors text-xl font-bold"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-accent transition-colors text-xl font-bold"
          >
            Contact
          </button>
        </div>

        {/* CTA BUTTON */}
        <button
          onClick={() => scrollToSection('contact')}
          className="px-7 py-3 bg-accent text-background font-bold rounded hover:bg-accent/90 transition-colors text-lg"
        >
          Get Started
        </button>
      </div>
    </nav>
  )
}