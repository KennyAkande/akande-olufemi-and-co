'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border ledger-line">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3.5" onClick={() => setMenuOpen(false)}>
          <img src="/logo2.png" alt="Akande Olufemi & Co Emblem" className="w-12 h-12 object-contain" />
          <div className="flex flex-col">
            <div className="font-heading text-lg font-bold text-secondary tracking-wide">AKANDE OLUFEMI</div>
            <div className="font-heading text-sm text-accent font-bold tracking-widest">& CO</div>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xl font-bold transition-colors ${
                isActive(link.href) ? 'text-accent' : 'text-foreground hover:text-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block px-7 py-3 bg-accent text-background font-bold rounded hover:bg-accent/90 transition-colors text-lg"
        >
          Get Started
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block h-0.5 w-7 bg-foreground transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-7 bg-foreground transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-7 bg-foreground transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-xl font-bold ${isActive(link.href) ? 'text-accent' : 'text-foreground'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-7 py-3 bg-accent text-background font-bold rounded text-center text-lg"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
