import type { Block } from 'payload'

export const ParallaxSection: Block = {
  slug: 'parallaxSection',
  labels: {
    singular: 'Parallax Section',
    plural: 'Parallax Sections',
  },
  fields: [
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      required: true,
    },
  ],
}
