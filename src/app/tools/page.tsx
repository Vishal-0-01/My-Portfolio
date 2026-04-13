import { getTools } from '@/lib/sanity'
import { mockTools } from '@/lib/mockData'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tools',
  description: 'Financial models and analytical tools built for real decisions.',
}

async function getData() {
  try {
    const data = await getTools()
    return data?.length ? data : mockTools
  } catch {
    return mockTools
  }
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; cls: string }> = {
    live: { label: 'Live', cls: 'status-live' },
    'in-progress': { label: 'In Progress', cls: 'status-in-progress' },
    archived: { label: 'Archived', cls: 'status-archived' },
  }
  const { label, cls } = map[status] || map['archived']
  return (
    <span className={`tag ${cls}`} style={{ letterSpacing: '0.06em' }}>
      {label}
    </span>
  )
}

export default async function ToolsPage() {
  const tools = await getData()

  return (
    <div className="pt-14">
      <div className="max-w-6xl mx-auto px-6 section">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-bar" />
            <span className="label">Tools</span>
          </div>
          <h1 className="display-lg mb-4" style={{ color: 'var(--ink)' }}>Models & Tools</h1>
          <p className="text-base max-w-xl" style={{ color: 'var(--ink-muted)' }}>
            Built for decisions, not demos. Each tool solves a specific analytical problem
            that kept coming up in real work.
          </p>
        </div>

        {/* Tool list */}
        <div className="space-y-px" style={{ background: 'var(--border)' }}>
          {tools.map((tool: any, i: number) => (
            <div
              key={tool._id}
              className="p-8 flex flex-col md:flex-row md:items-start gap-6 md:gap-10"
              style={{ background: 'var(--bg)' }}
            >
              {/* Number */}
              <div className="shrink-0 w-8">
                <span className="label" style={{ color: 'var(--accent)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Main */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h2
                    className="text-lg font-semibold"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)', letterSpacing: '-0.01em' }}
                  >
                    {tool.name}
                  </h2>
                  <StatusBadge status={tool.status} />
                </div>

                <p className="text-sm mb-4" style={{ color: 'var(--ink-muted)', lineHeight: '1.7' }}>
                  {tool.description}
                </p>

                {tool.whyItMatters && (
                  <div
                    className="p-4 rounded-sm mb-4"
                    style={{ background: 'var(--accent-muted)', border: '1px solid var(--accent-muted-border)' }}
                  >
                    <p className="label mb-1.5" style={{ color: 'var(--accent)' }}>Why it matters</p>
                    <p className="text-sm" style={{ color: 'var(--ink-muted)', lineHeight: '1.65' }}>
                      {tool.whyItMatters}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                  {tool.tags?.map((tag: string) => (
                    <span key={tag} className="tag tag-neutral">{tag}</span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              {tool.link && tool.status !== 'archived' && (
                <div className="shrink-0">
                  {tool.link.startsWith('http') ? (
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 border transition-colors duration-150"
                      style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--accent)'
                        e.currentTarget.style.color = '#fff'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = 'var(--accent)'
                      }}
                    >
                      Open ↗
                    </a>
                  ) : (
                    <Link
                      href={tool.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 border transition-colors duration-150"
                      style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                      onMouseEnter={undefined}
                    >
                      Open →
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
