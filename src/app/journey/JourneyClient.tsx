'use client'

import { useState } from 'react'
import { FilterBar } from '@/components/ui/FilterBar'

const TYPE_LABELS: Record<string, string> = {
  experience: 'Experience',
  project: 'Project',
  achievement: 'Achievement',
}

const TYPE_COLORS: Record<string, string> = {
  experience: '#1a3a6b',
  project: '#0e7490',
  achievement: '#7c3aed',
}

interface Entry {
  _id: string
  title: string
  date: string
  type: string
  description: string
  organization?: string
  link?: string
}

export function JourneyClient({ entries }: { entries: Entry[] }) {
  const [active, setActive] = useState('All')

  const allTypes = Array.from(new Set(entries.map((e) => e.type)))
  const typeLabels = allTypes.map((t) => TYPE_LABELS[t] || t)

  const filtered = active === 'All'
    ? entries
    : entries.filter((e) => TYPE_LABELS[e.type] === active || e.type === active)

  return (
    <div>
      {/* Filter */}
      <div className="mb-12">
        <FilterBar
          tags={typeLabels}
          active={active}
          onChange={setActive}
        />
      </div>

      {/* Timeline */}
      <div className="relative pl-8">
        {/* Vertical line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px"
          style={{ background: 'var(--border)' }}
        />

        <div className="space-y-10">
          {filtered.map((entry) => {
            const date = new Date(entry.date).toLocaleDateString('en-IN', {
              month: 'short', year: 'numeric',
            })
            const color = TYPE_COLORS[entry.type] || 'var(--accent)'

            return (
              <div key={entry._id} className="relative">
                {/* Dot */}
                <div
                  className="absolute -left-10 top-1.5 w-2.5 h-2.5 rounded-full border-2"
                  style={{
                    background: color,
                    borderColor: 'var(--bg)',
                    boxShadow: `0 0 0 3px ${color}22`,
                  }}
                />

                {/* Card */}
                <div className="card">
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-sm"
                      style={{
                        background: `${color}15`,
                        color: color,
                        border: `1px solid ${color}30`,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        fontSize: '0.6rem',
                      }}
                    >
                      {TYPE_LABELS[entry.type] || entry.type}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--ink-faint)' }}>{date}</span>
                    {entry.organization && (
                      <>
                        <span style={{ color: 'var(--ink-faint)', fontSize: '0.65rem' }}>·</span>
                        <span className="text-xs" style={{ color: 'var(--ink-muted)' }}>
                          {entry.organization}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--ink)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {entry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm" style={{ color: 'var(--ink-muted)', lineHeight: '1.7' }}>
                    {entry.description}
                  </p>

                  {/* Link */}
                  {entry.link && (
                    <a
                      href={entry.link}
                      target={entry.link.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-xs font-medium transition-colors duration-150"
                      style={{ color: 'var(--accent)' }}
                    >
                      View →
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-sm py-8" style={{ color: 'var(--ink-faint)' }}>
            No entries for this filter.
          </p>
        )}
      </div>
    </div>
  )
}
