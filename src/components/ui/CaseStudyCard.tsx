import Link from 'next/link'

interface CaseStudyCardProps {
  title: string
  slug: string
  summary: string
  tags: string[]
  date: string
}

export function CaseStudyCard({ title, slug, summary, tags, date }: CaseStudyCardProps) {
  const formatted = new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
  })

  return (
    <Link href={`/case-studies/${slug}`} className="block group">
      <article className="card h-full flex flex-col gap-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags?.map((tag) => (
            <span key={tag} className="tag tag-neutral">{tag}</span>
          ))}
        </div>

        {/* Title */}
        <h3
          className="text-base font-semibold leading-snug transition-colors duration-150"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--ink)',
            letterSpacing: '-0.01em',
          }}
        >
          {title}
        </h3>

        {/* Summary */}
        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--ink-muted)' }}>
          {summary}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-xs" style={{ color: 'var(--ink-faint)' }}>{formatted}</span>
          <span
            className="text-xs font-medium transition-colors duration-150"
            style={{ color: 'var(--accent)' }}
          >
            Read →
          </span>
        </div>
      </article>
    </Link>
  )
}
