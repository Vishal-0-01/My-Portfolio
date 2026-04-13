'use client'

import { useState } from 'react'
import { FilterBar } from '@/components/ui/FilterBar'
import { CaseStudyCard } from '@/components/ui/CaseStudyCard'

interface Props {
  studies: any[]
  allTags: string[]
}

export function CaseStudiesClient({ studies, allTags }: Props) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? studies
    : studies.filter((s) => s.tags?.includes(active))

  return (
    <div>
      <div className="mb-8">
        <FilterBar tags={allTags} active={active} onChange={setActive} />
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm py-12" style={{ color: 'var(--ink-faint)' }}>
          No case studies found for this filter.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((study: any) => (
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
      )}

      <p className="mt-8 text-xs" style={{ color: 'var(--ink-faint)' }}>
        {filtered.length} case {filtered.length === 1 ? 'study' : 'studies'}
        {active !== 'All' ? ` tagged "${active}"` : ''}
      </p>
    </div>
  )
}
