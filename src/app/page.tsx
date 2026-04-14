import Link from 'next/link'
import { CaseStudyCard } from '@/components/ui/CaseStudyCard'
import { getFeaturedCaseStudies } from '@/lib/sanity'
import { mockCaseStudies } from '@/lib/mockData'

async function getFeatured() {
  try {
    const data = await getFeaturedCaseStudies()
    return data?.length ? data : mockCaseStudies.filter((c) => c.featured)
  } catch {
    return mockCaseStudies.filter((c) => c.featured)
  }
}

const NAV_GRID = [
  {
    href: '/case-studies',
    label: 'Case Studies',
    desc: 'Structured breakdowns of business and investment problems.',
    num: '01',
  },
  {
    href: '/tools',
    label: 'Tools',
    desc: 'Models and calculators built for real analytical decisions.',
    num: '02',
  },
  {
    href: '/insights',
    label: 'Insights',
    desc: 'Short-form thinking on markets, strategy, and frameworks.',
    num: '03',
  },
  {
    href: '/journey',
    label: 'Journey',
    desc: 'A timeline of experience, projects, and what shaped my thinking.',
    num: '04',
  },
]

export default async function HomePage() {
  const featured = await getFeatured()

  return (
    <div>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section
        className="min-h-screen flex flex-col justify-center pt-14"
        style={{ background: 'var(--bg)' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          {/* Kicker */}
          <div className="flex items-center gap-3 mb-10 animate-fade-up animate-fill-both">
            <span className="accent-bar" />
            <span className="label">Business Analysis · Investment Thinking</span>
          </div>

          {/* Headline */}
          <h1
            className="display-xl mb-8 max-w-4xl animate-fade-up animate-fill-both"
          >
            I break down business problems{' '}
            <span
              className="italic"
              style={{ color: 'var(--accent)' }}
            >
              and investment decisions
            </span>{' '}
            using data, strategy,{' '}
            and financial analysis.
          </h1>

          {/* Sub */}
          <p
            className="text-lg max-w-xl mb-12 animate-fade-up animate-fill-both"
            style={{ color: 'var(--ink-muted)', lineHeight: '1.6' }}
          >
            MBAFT candidate at FMS Delhi. I build models, write structured analysis,
            and think hard about capital allocation.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up animate-fill-both">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold tracking-wide transition-opacity duration-150 hover:opacity-90"
              style={{ background: 'var(--accent)', color: '#fff', letterSpacing: '0.03em' }}
            >
              View Case Studies
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>

            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold tracking-wide border transition-colors duration-150 hover:bg-[var(--bg-card)]"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--ink-muted)',
                letterSpacing: '0.03em',
                background: 'transparent',
              }}
            >
              Explore Tools
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-24 flex items-center gap-3 animate-fade-up animate-fill-both">
            <div
              className="w-px h-10"
              style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
            />
            <span className="label" style={{ color: 'var(--ink-faint)' }}>Featured Work</span>
          </div>
        </div>
      </section>

      {/* ─── Featured Work ─────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-label mb-10">
            <span className="label">Featured Work</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featured.map((study: any) => (
              <CaseStudyCard
                key={study._id}
                title={study.title}
                slug={study.slug}
                summary={study.summary}
                tags={study.tags || []}
                date={study.date}
              />
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/case-studies"
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: 'var(--accent)' }}
            >
              All case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Navigation Grid ───────────────────────────────────────── */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-label mb-10">
            <span className="label">Explore</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background: 'var(--border)' }}>
            {NAV_GRID.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-8 flex flex-col gap-4 transition-colors duration-150 hover:bg-[var(--bg-card)]"
                style={{ background: 'var(--bg)' }}
              >
                <div className="flex items-start justify-between">
                  <span className="label" style={{ color: 'var(--accent)' }}>{item.num}</span>
                  <svg
                    className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    style={{ color: 'var(--ink-faint)' }}
                  >
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </div>

                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}
                  >
                    {item.label}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Signal strip ──────────────────────────────────────────── */}
      <section className="section-sm border-t border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className="text-sm max-w-lg"
            style={{ color: 'var(--ink-muted)', lineHeight: '1.7' }}
          >
            Every piece of work here started with a clear question, was worked through
            with a structured framework, and ended with a defensible recommendation.
            Not analysis for its own sake.
          </p>
          <Link
            href="/about"
            className="text-sm font-medium whitespace-nowrap transition-colors duration-150"
            style={{ color: 'var(--accent)' }}
          >
            About me →
          </Link>
        </div>
      </section>
    </div>
  )
}