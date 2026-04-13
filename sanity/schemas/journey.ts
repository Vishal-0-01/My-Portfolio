import { defineType, defineField } from 'sanity'

export const journeySchema = defineType({
  name: 'journey',
  title: 'Journey',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Experience', value: 'experience' },
          { title: 'Project', value: 'project' },
          { title: 'Achievement', value: 'achievement' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'organization',
      title: 'Organization / Institution',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link (optional)',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'date', media: 'type' },
    prepare({ title, subtitle }) {
      return { title, subtitle }
    },
  },
  orderings: [
    {
      title: 'Date, Newest First',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
})
