import { getCaseStudies } from '@/lib/sanity'
import { mockCaseStudies } from '@/lib/mockData'
import { CaseStudiesClient } from './CaseStudiesClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Structured breakdowns of business, strategy, and investment problems.',
}

async function getData() {
  try {
    const data = await getCaseStudies()
    return data?.length ? data : mockCaseStudies
  } catch {
    return mockCaseStudies
  }
}

export default async function CaseStudiesPage() {
  const studies = await getData()
  const allTags = Array.from(new Set(studies.flatMap((s: any) => s.tags || []))) as string[]

  return (
    <div className="pt-14">
      <div className="max-w-6xl mx-auto px-6 section">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-bar" />
            <span className="label">Work</span>
          </div>
          <h1 className="display-lg mb-4" style={{ color: 'var(--ink)' }}>Case Studies</h1>
          <p className="text-base max-w-xl" style={{ color: 'var(--ink-muted)' }}>
            Structured analysis of business, strategy, and investment problems.
            Each case follows a consistent framework: problem → context → data → approach → analysis → recommendation.
          </p>
        </div>

        {/* Client component handles filtering */}
        <CaseStudiesClient studies={studies} allTags={allTags} />
      </div>
    </div>
  )
}
