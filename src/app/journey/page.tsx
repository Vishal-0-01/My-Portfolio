import { getJourney } from '@/lib/sanity'
import { mockJourney } from '@/lib/mockData'
import { JourneyClient } from './JourneyClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journey',
  description: 'A timeline of experience, projects, and achievements.',
}

async function getData() {
  try {
    const data = await getJourney()
    return data?.length ? data : mockJourney
  } catch {
    return mockJourney
  }
}

export default async function JourneyPage() {
  const entries = await getData()

  return (
    <div className="pt-14">
      <div className="max-w-6xl mx-auto px-6 section">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-bar" />
            <span className="label">Timeline</span>
          </div>
          <h1 className="display-lg mb-4" style={{ color: 'var(--ink)' }}>Journey</h1>
          <p className="text-base max-w-xl" style={{ color: 'var(--ink-muted)' }}>
            Reverse-chronological record of what I've done, built, and learned.
          </p>
        </div>

        <JourneyClient entries={entries} />
      </div>
    </div>
  )
}
