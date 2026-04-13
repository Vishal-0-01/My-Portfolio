import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-14 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        <span className="label mb-6 block" style={{ color: 'var(--accent)' }}>404</span>
        <h1 className="display-lg mb-4" style={{ color: 'var(--ink)' }}>Page not found.</h1>
        <p className="text-base mb-10 max-w-md" style={{ color: 'var(--ink-muted)' }}>
          The page you're looking for doesn't exist or was moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5"
          style={{ background: 'var(--accent)', color: '#fff' }}
        >
          Back to home →
        </Link>
      </div>
    </div>
  )
}
