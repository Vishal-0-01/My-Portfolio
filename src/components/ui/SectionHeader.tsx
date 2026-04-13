interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      {label && (
        <div className="section-label mb-4">
          <span className="label">{label}</span>
        </div>
      )}
      <h2 className="display-md" style={{ color: 'var(--ink)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base max-w-xl" style={{ color: 'var(--ink-muted)' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
