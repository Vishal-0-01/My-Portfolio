'use client'

interface FilterBarProps {
  tags: string[]
  active: string
  onChange: (tag: string) => void
}

export function FilterBar({ tags, active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange('All')}
        className={`tag ${active === 'All' ? 'active' : 'tag-neutral'}`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onChange(tag)}
          className={`tag ${active === tag ? 'active' : 'tag-neutral'}`}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
