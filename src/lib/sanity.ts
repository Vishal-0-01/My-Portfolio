import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)
export function urlFor(source: any) {
  return builder.image(source)
}

// ─── Typed fetch helpers ────────────────────────────────────────────────────

export async function getCaseStudies() {
  return client.fetch(`
    *[_type == "caseStudy"] | order(date desc) {
      _id, title, "slug": slug.current, summary, tags, date, featured
    }
  `)
}

export async function getFeaturedCaseStudies() {
  return client.fetch(`
    *[_type == "caseStudy" && featured == true] | order(date desc)[0...3] {
      _id, title, "slug": slug.current, summary, tags, date
    }
  `)
}

export async function getCaseStudy(slug: string) {
  return client.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0] {
      _id, title, "slug": slug.current, summary, tags, date,
      problem, context, dataInputs, approach, analysis, recommendation
    }`,
    { slug }
  )
}

export async function getInsights() {
  return client.fetch(`
    *[_type == "insight"] | order(date desc) {
      _id, title, "slug": slug.current, date, readTime, excerpt, tags
    }
  `)
}

export async function getInsight(slug: string) {
  return client.fetch(
    `*[_type == "insight" && slug.current == $slug][0] {
      _id, title, "slug": slug.current, date, readTime, excerpt, content, tags
    }`,
    { slug }
  )
}

export async function getTools() {
  return client.fetch(`
    *[_type == "tool"] | order(order asc) {
      _id, name, "slug": slug.current, description, whyItMatters, link, status, tags
    }
  `)
}

export async function getJourney() {
  return client.fetch(`
    *[_type == "journey"] | order(date desc) {
      _id, title, date, type, description, organization, link
    }
  `)
}
