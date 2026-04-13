import { defineType, defineField } from 'sanity'

export const caseStudySchema = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'One-Line Summary',
      type: 'string',
      description: 'Shown on cards. Keep it under 120 characters.',
      validation: (Rule) => Rule.required().max(140),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Finance', value: 'Finance' },
          { title: 'Strategy', value: 'Strategy' },
          { title: 'Operations', value: 'Operations' },
          { title: 'Investment', value: 'Investment' },
          { title: 'Macro', value: 'Macro' },
          { title: 'Valuation', value: 'Valuation' },
        ],
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'problem',
      title: 'Problem',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'What is the core problem being solved?',
    }),
    defineField({
      name: 'context',
      title: 'Context',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Background and situational context.',
    }),
    defineField({
      name: 'dataInputs',
      title: 'Data / Inputs',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'What data, metrics, or inputs were used?',
    }),
    defineField({
      name: 'approach',
      title: 'Approach',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Frameworks and methodology applied.',
    }),
    defineField({
      name: 'analysis',
      title: 'Analysis',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The core analytical work and findings.',
    }),
    defineField({
      name: 'recommendation',
      title: 'Recommendation',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Conclusions and actionable recommendations.',
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'summary' },
  },
  orderings: [
    {
      title: 'Date, Newest First',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
})
