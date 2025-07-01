import { defineField, defineType } from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'slides',
      title: 'Carousel Slides',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', type: 'image', title: 'Image' },
            { name: 'title', type: 'string', title: 'Slide Title' },
            { name: 'color', type: 'string', title: 'Color' },
            { name: 'description', type: 'text', title: 'Description' },
          ],
        },
      ],
    }),
  ],
})
