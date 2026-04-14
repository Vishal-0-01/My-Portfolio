import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch.',
}

export default function ContactPage() {
  return (
    <div className="pt-14">
      <div className="max-w-6xl mx-auto px-6 section">
        <div className="max-w-xl">
          {/* Kicker */}
          <div className="flex items-center gap-3 mb-8">
            <span className="accent-bar" />
            <span className="label">Contact</span>
          </div>

          <h1 className="display-lg mb-6" style={{ color: 'var(--ink)' }}>
            Let's talk.
          </h1>

          <p className="text-base mb-14" style={{ color: 'var(--ink-muted)', lineHeight: '1.8' }}>
            I'm open to conversations about investment analysis roles, strategy consulting,
            analytical projects, or just a sharp exchange of ideas.
            No fluff — if you have something specific in mind, say it.
          </p>

          {/* Contact options */}
          <div className="space-y-px mb-14" style={{ background: 'var(--border)' }}>
            <a
              href="mailto:vishal@example.com"
              className="flex items-center justify-between p-6 group transition-colors duration-150"
              style={{ background: 'var(--bg)' }}
              
            >
              <div>
                <p className="label mb-1.5">Email</p>
                <p
                  className="text-base font-medium transition-colors duration-150"
                  style={{ color: 'var(--ink)', fontFamily: 'var(--font-sans)' }}
                >
                  vishal@example.com
                </p>
              </div>
              <span
                className="text-lg transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: 'var(--accent)' }}
              >
                →
              </span>
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 group transition-colors duration-150"
              style={{ background: 'var(--bg)' }}
              
            >
              <div>
                <p className="label mb-1.5">LinkedIn</p>
                <p
                  className="text-base font-medium"
                  style={{ color: 'var(--ink)', fontFamily: 'var(--font-sans)' }}
                >
                  linkedin.com/in/yourprofile
                </p>
              </div>
              <span
                className="text-lg transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: 'var(--accent)' }}
              >
                ↗
              </span>
            </a>
          </div>

          {/* Note */}
          <div
            className="p-5 rounded-sm"
            style={{ background: 'var(--accent-muted)', border: '1px solid var(--accent-muted-border)' }}
          >
            <p className="text-sm" style={{ color: 'var(--ink-muted)', lineHeight: '1.7' }}>
              <strong style={{ color: 'var(--ink)' }}>Response time:</strong>{' '}
              Usually within 48 hours. If the question is interesting,
              expect a longer reply than you asked for.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
