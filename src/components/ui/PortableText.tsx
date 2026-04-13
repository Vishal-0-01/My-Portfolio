import { PortableText as PT } from '@portabletext/react'

const components = {
  block: {
    normal: ({ children }: any) => (
      <p className="mb-4 text-base leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
        {children}
      </p>
    ),
    h2: ({ children }: any) => (
      <h2 className="display-md mt-8 mb-4" style={{ color: 'var(--ink)' }}>{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold mt-6 mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}>
        {children}
      </h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote
        className="border-l-2 pl-5 my-6 italic"
        style={{ borderColor: 'var(--accent)', color: 'var(--ink-muted)' }}
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mb-4 ml-5 space-y-1.5 list-disc" style={{ color: 'var(--ink-muted)' }}>
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mb-4 ml-5 space-y-1.5 list-decimal" style={{ color: 'var(--ink-muted)' }}>
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="text-base leading-relaxed">{children}</li>,
    number: ({ children }: any) => <li className="text-base leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold" style={{ color: 'var(--ink)' }}>{children}</strong>
    ),
    em: ({ children }: any) => <em>{children}</em>,
    code: ({ children }: any) => (
      <code
        className="px-1.5 py-0.5 rounded text-sm font-mono"
        style={{ background: 'var(--bg-card)', color: 'var(--accent)', border: '1px solid var(--border)' }}
      >
        {children}
      </code>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith('http') ? '_blank' : undefined}
        rel="noopener noreferrer"
        className="underline underline-offset-2 transition-colors duration-150"
        style={{ color: 'var(--accent)' }}
      >
        {children}
      </a>
    ),
  },
}

export function PortableText({ value }: { value: any[] }) {
  if (!value) return null
  return <PT value={value} components={components} />
}
