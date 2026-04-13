import Link from 'next/link'

const LINKS = [
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/tools', label: 'Tools' },
  { href: '/insights', label: 'Insights' },
  { href: '/journey', label: 'Journey' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer
      className="border-t mt-24"
      style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span
              className="w-4 h-4 border-2 rotate-45 inline-block"
              style={{ borderColor: 'var(--accent)' }}
            />
            <span className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>Vishal</span>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-faint)' }}>
            Business analysis, investment thinking,<br />and decision frameworks.
          </p>
        </div>

        {/* Nav */}
        <div>
          <p className="label mb-4">Pages</p>
          <div className="flex flex-col gap-2.5">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm transition-colors duration-150"
                style={{ color: 'var(--ink-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-muted)')}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="label mb-4">Connect</p>
          <div className="flex flex-col gap-2.5">
            <a
              href="mailto:vishal@example.com"
              className="text-sm transition-colors duration-150"
              style={{ color: 'var(--ink-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-muted)')}
            >
              vishal@example.com
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors duration-150"
              style={{ color: 'var(--ink-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-muted)')}
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </div>

      <div
        className="border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <p className="text-xs" style={{ color: 'var(--ink-faint)' }}>
            © {new Date().getFullYear()} Vishal
          </p>
          <p className="text-xs" style={{ color: 'var(--ink-faint)' }}>
            Built with Next.js + Sanity
          </p>
        </div>
      </div>
    </footer>
  )
}
