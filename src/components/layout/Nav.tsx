'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const NAV_LINKS = [
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/tools', label: 'Tools' },
  { href: '/insights', label: 'Insights' },
  { href: '/journey', label: 'Journey' },
  { href: '/about', label: 'About' },
]

export function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span
            className="w-5 h-5 border-2 rotate-45 transition-transform duration-300 group-hover:rotate-90"
            style={{ borderColor: 'var(--accent)' }}
          />
          <span
            className="text-sm font-semibold tracking-tight"
            style={{ color: 'var(--ink)', fontFamily: 'var(--font-sans)' }}
          >
            Vishal
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname.startsWith(link.href) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/contact"
            className="text-xs font-semibold tracking-wide px-3.5 py-1.5 rounded-sm transition-colors duration-150"
            style={{
              background: 'var(--accent)',
              color: '#fff',
              letterSpacing: '0.04em',
            }}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="p-1.5 rounded-sm"
            style={{ color: 'var(--ink-muted)' }}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className="block h-px transition-all duration-200"
                style={{
                  background: 'var(--ink)',
                  transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block h-px transition-all duration-200"
                style={{
                  background: 'var(--ink)',
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-px transition-all duration-200"
                style={{
                  background: 'var(--ink)',
                  transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none',
                }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-5 flex flex-col gap-5"
          style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-base ${pathname.startsWith(link.href) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-xs font-semibold tracking-widest px-4 py-2 text-center rounded-sm"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
