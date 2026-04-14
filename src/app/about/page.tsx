import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Background, current focus, and direction.',
}

const FOCUS_ITEMS = [
  {
    label: 'Investment Analysis',
    desc: 'Building quantitative frameworks for Indian equity markets. Particularly interested in active share, factor exposure, and valuation-driven allocation.',
  },
  {
    label: 'Business Strategy',
    desc: 'Applying structured frameworks (MECE, issue trees, scenario analysis) to real operational and competitive problems.',
  },
  {
    label: 'Financial Modeling',
    desc: 'Building models that produce decisions, not just outputs. Monte Carlo, DCF, scenario modeling, and portfolio optimization.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-14">
      <div className="max-w-6xl mx-auto px-6 section">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">

          {/* Main */}
          <div>
            {/* Kicker */}
            <div className="flex items-center gap-3 mb-8">
              <span className="accent-bar" />
              <span className="label">About</span>
            </div>

            {/* Headline */}
            <h1 className="display-lg mb-8" style={{ color: 'var(--ink)' }}>
              I think in frameworks<br />
              <span className="italic" style={{ color: 'var(--accent)' }}>and build in models.</span>
            </h1>

            {/* Bio */}
            <div className="space-y-5 max-w-2xl mb-14">
              <p className="text-base" style={{ color: 'var(--ink-muted)', lineHeight: '1.8' }}>
                I'm Vishal — a postgraduate student at{' '}
                <strong style={{ color: 'var(--ink)' }}>Faculty of Management Studies, Delhi University</strong>{' '}
                (MBAFT program). My work sits at the intersection of financial analysis,
                investment thinking, and structured problem-solving.
              </p>
              <p className="text-base" style={{ color: 'var(--ink-muted)', lineHeight: '1.8' }}>
                I'm drawn to problems where the answer isn't obvious and the data is messy.
                I build models and frameworks to make the structure of a decision visible —
                so the recommendation is defensible, not just intuitive.
              </p>
              <p className="text-base" style={{ color: 'var(--ink-muted)', lineHeight: '1.8' }}>
                Before FMS, I spent time developing a strong quantitative foundation —
                working across macroeconomic modelling, equity research, and portfolio construction.
                Most of my work is documented on this site.
              </p>
            </div>

            {/* Current Focus */}
            <div className="mb-14">
              <div className="section-label mb-8">
                <span className="label">Current Focus</span>
              </div>
              <div className="space-y-px" style={{ background: 'var(--border)' }}>
                {FOCUS_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className="p-6 flex flex-col gap-2"
                    style={{ background: 'var(--bg)' }}
                  >
                    <h3
                      className="text-base font-semibold"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}
                    >
                      {item.label}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--ink-muted)', lineHeight: '1.7' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direction */}
            <div>
              <div className="section-label mb-6">
                <span className="label">Direction</span>
              </div>
              <p className="text-base max-w-2xl" style={{ color: 'var(--ink-muted)', lineHeight: '1.8' }}>
                I'm looking to apply this skillset in roles that reward analytical depth —
                investment analysis, corporate strategy, or consulting. I want to work on problems
                where clear thinking and rigorous frameworks create a measurable edge.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:pt-20">
            <div
              className="p-6 rounded-sm border mb-6"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <p className="label mb-4">Education</p>
              <div className="space-y-1 mb-4">
                <p className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                  MBAFT
                </p>
                <p className="text-xs" style={{ color: 'var(--ink-muted)' }}>
                  Faculty of Management Studies
                </p>
                <p className="text-xs" style={{ color: 'var(--ink-faint)' }}>
                  Delhi University · 2023 – Present
                </p>
              </div>
            </div>

            <div
              className="p-6 rounded-sm border mb-6"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <p className="label mb-4">Interests</p>
              <div className="flex flex-wrap gap-2">
                {['Portfolio Theory', 'Factor Investing', 'Macro Policy', 'Competitive Strategy', 'Decision Science'].map((i) => (
                  <span key={i} className="tag tag-neutral">{i}</span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href="/case-studies"
                className="flex items-center justify-between p-4 border transition-colors duration-150"
                style={{ borderColor: 'var(--border)', color: 'var(--ink-muted)' }}
                
              >
                <span className="text-sm">View Case Studies</span>
                <span>→</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-between p-4 border transition-colors duration-150"
                style={{ borderColor: 'var(--border)', color: 'var(--ink-muted)' }}
                
              >
                <span className="text-sm">Get in Touch</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
