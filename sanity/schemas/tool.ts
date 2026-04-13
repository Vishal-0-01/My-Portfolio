import { defineType, defineField } from 'sanity'

export const toolSchema = defineType({
  name: 'tool',
  title: 'Tool',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Tool Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    }),
    defineField({
      name: 'description',
      title: 'What it Does',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whyItMatters',
      title: 'Why it Matters',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'link',
      title: 'Link (external or internal path)',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Live', value: 'live' },
          { title: 'In Progress', value: 'in-progress' },
          { title: 'Archived', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'live',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = shown first',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'status' },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
