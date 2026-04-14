import { getCaseStudy, getCaseStudies } from '@/lib/sanity'
import { mockCaseStudies } from '@/lib/mockData'
import { PortableText } from '@/components/ui/PortableText'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

const MOCK_DETAIL = {
  problem: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'How do you optimally allocate capital across Indian flexi-cap mutual funds given varying risk tolerances, while incorporating real market valuation signals?' }] }],
  context: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Most Indian retail investors default to recency bias — chasing last year\'s top performers. This results in poorly diversified, momentum-driven portfolios with no risk-adjusted framework. The Indian AMC ecosystem has 40+ flexi-cap funds with wildly different active shares, expense ratios, and risk profiles.' }] }],
  dataInputs: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Historical NAV data (5-year rolling), Nifty 50 P/E and P/B ratios, fund factsheets from 8 AMCs, benchmark (Nifty 500) returns, and risk-free rate (91-day T-bill). Monte Carlo simulation with 10,000 iterations per scenario.' }] }],
  approach: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Modern Portfolio Theory as the base, extended with: (1) Monte Carlo simulation for return distribution modeling, (2) Sortino ratio for downside-specific risk assessment, (3) Alpha over benchmark for active manager evaluation, and (4) Market valuation overlay using P/E percentile bands to tilt allocations.' }] }],
  analysis: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Across 4 risk scenarios (conservative, moderate, aggressive, momentum), the optimizer generated distinct weight distributions. High active-share funds (>70%) showed superior alpha but with higher tracking error. The market valuation overlay reduced equity allocation by 15-20% in overvalued zones (P/E > 80th percentile).' }] }],
  recommendation: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'A core-satellite structure: 60% in 2-3 high-active-share funds forming the core, 25% in a momentum sleeve, 15% cash/liquid held in overvalued market conditions. Rebalance quarterly; apply valuation overlay monthly.' }] }],
}

async function getData(slug: string) {
  try {
    const data = await getCaseStudy(slug)
    if (data) return data
  } catch {}
  // Fallback to mock
  const mock = mockCaseStudies.find((c) => c.slug === slug)
  if (!mock) return null
  return { ...mock, ...MOCK_DETAIL }
}

export async function generateStaticParams() {
  try {
    const studies = await getCaseStudies()
    return studies.map((s: any) => ({ slug: s.slug }))
  } catch {
    return mockCaseStudies.map((s) => ({ slug: s.slug }))
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = await getData(params.slug)
  if (!study) return { title: 'Not Found' }
  return { title: study.title, description: study.summary }
}

const SECTIONS = [
  { key: 'problem', label: 'Problem', num: '01' },
  { key: 'context', label: 'Context', num: '02' },
  { key: 'dataInputs', label: 'Data & Inputs', num: '03' },
  { key: 'approach', label: 'Approach', num: '04' },
  { key: 'analysis', label: 'Analysis', num: '05' },
  { key: 'recommendation', label: 'Recommendation', num: '06' },
] as const

export default async function CaseStudyPage({ params }: Props) {
  const study = await getData(params.slug)
  if (!study) notFound()

  const date = new Date(study.date).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

  return (
    <div className="pt-14">
      <div className="max-w-6xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="pt-10 pb-6 flex items-center gap-2 text-xs" style={{ color: 'var(--ink-faint)' }}>
          <Link href="/case-studies" className="hover:text-current transition-colors" style={{ color: 'var(--accent)' }}>
            Case Studies
          </Link>
          <span>/</span>
          <span>{study.title}</span>
        </div>

        {/* Hero */}
        <div className="pb-12 border-b" style={{ borderColor: 'var(--border)' }}>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {study.tags?.map((tag: string) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          <h1 className="display-lg mb-5 max-w-3xl" style={{ color: 'var(--ink)' }}>
            {study.title}
          </h1>

          <p className="text-base max-w-2xl mb-6" style={{ color: 'var(--ink-muted)' }}>
            {study.summary}
          </p>

          <p className="text-xs" style={{ color: 'var(--ink-faint)' }}>
            {date}
          </p>
        </div>

        {/* Table of contents */}
        <div className="py-8 border-b" style={{ borderColor: 'var(--border)' }}>
          <p className="label mb-4">Structure</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {SECTIONS.map((s) => (
              <a
                key={s.key}
                href={`#${s.key}`}
                className="text-sm flex items-center gap-1.5 transition-colors duration-150"
                style={{ color: 'var(--ink-muted)' }}
                
              >
                <span className="text-xs font-mono" style={{ color: 'var(--ink-faint)' }}>{s.num}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Body sections */}
        <div className="py-14 grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-16">
          {/* Sticky section nav (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-24 flex flex-col gap-2">
              {SECTIONS.map((s) => (
                <a
                  key={s.key}
                  href={`#${s.key}`}
                  className="flex items-center gap-2.5 text-xs py-1.5 transition-colors duration-150"
                  style={{ color: 'var(--ink-faint)' }}
                  
                >
                  <span className="font-mono">{s.num}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-14">
            {SECTIONS.map((s) => (
              <section key={s.key} id={s.key}>
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-xs font-mono font-semibold px-2 py-0.5 rounded-sm"
                    style={{ background: 'var(--accent-muted)', color: 'var(--accent)', border: '1px solid var(--accent-muted-border)' }}
                  >
                    {s.num}
                  </span>
                  <h2
                    className="text-xl font-semibold"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)', letterSpacing: '-0.01em' }}
                  >
                    {s.label}
                  </h2>
                </div>
                <div
                  className="pl-0 border-l-0 md:pl-6 md:border-l"
                  style={{ borderColor: 'var(--border)' }}
                >
                  {study[s.key] ? (
                    <PortableText value={study[s.key]} />
                  ) : (
                    <p className="text-sm italic" style={{ color: 'var(--ink-faint)' }}>
                      Content coming soon.
                    </p>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Footer nav */}
        <div className="pb-16 border-t pt-8" style={{ borderColor: 'var(--border)' }}>
          <Link
            href="/case-studies"
            className="text-sm font-medium transition-colors duration-150"
            style={{ color: 'var(--accent)' }}
          >
            ← All case studies
          </Link>
        </div>
      </div>
    </div>
  )
}
