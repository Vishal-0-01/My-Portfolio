import { getInsights } from '@/lib/sanity'
import { mockInsights } from '@/lib/mockData'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Short-form thinking on markets, strategy, and frameworks.',
}

async function getData() {
  try {
    const data = await getInsights()
    return data?.length ? data : mockInsights
  } catch {
    return mockInsights
  }
}

export default async function InsightsPage() {
  const insights = await getData()

  return (
    <div className="pt-14">
      <div className="max-w-6xl mx-auto px-6 section">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-bar" />
            <span className="label">Writing</span>
          </div>
          <h1 className="display-lg mb-4" style={{ color: 'var(--ink)' }}>Insights</h1>
          <p className="text-base max-w-xl" style={{ color: 'var(--ink-muted)' }}>
            Short-form thinking on markets, strategy, and analytical frameworks.
            Opinionated. Evidence-backed.
          </p>
        </div>

        {/* List */}
        <div className="space-y-px" style={{ background: 'var(--border)' }}>
          {insights.map((post: any) => {
            const date = new Date(post.date).toLocaleDateString('en-IN', {
              day: 'numeric', month: 'short', year: 'numeric',
            })
            return (
              <Link
                key={post._id}
                href={`/insights/${post.slug}`}
                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 md:p-8 transition-colors duration-150"
                style={{ background: 'var(--bg)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--bg-card)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--bg)' }}
              >
                {/* Date */}
                <div className="shrink-0 w-28">
                  <span className="text-xs" style={{ color: 'var(--ink-faint)' }}>{date}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h2
                    className="text-base font-semibold mb-1.5 transition-colors duration-150"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--ink)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-sm line-clamp-2" style={{ color: 'var(--ink-muted)' }}>
                      {post.excerpt}
                    </p>
                  )}
                </div>

                {/* Meta */}
                <div className="shrink-0 flex items-center gap-4">
                  {post.readTime && (
                    <span className="text-xs" style={{ color: 'var(--ink-faint)' }}>
                      {post.readTime} min read
                    </span>
                  )}
                  <span
                    className="text-xs font-medium transition-colors duration-150"
                    style={{ color: 'var(--accent)' }}
                  >
                    Read →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {insights.length === 0 && (
          <p className="text-sm py-12" style={{ color: 'var(--ink-faint)' }}>
            No insights published yet.
          </p>
        )}
      </div>
    </div>
  )
}
