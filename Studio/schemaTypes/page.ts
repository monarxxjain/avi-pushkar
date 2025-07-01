import { defineField, defineType } from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
    }),
    defineField({
      name: 'sections',
      type: 'array',
      title: 'Page Sections',
      of: [
        { type: 'heroSection' },
        // Future sections can be added here like:
        // { type: 'testimonialSection' },
        // { type: 'featureGrid' },
      ],
    }),
  ],
})
