import type { Block } from 'payload'

export const LiquidContainer: Block = {
  slug: 'liquidContainer',
  labels: {
    singular: 'Liquid Container',
    plural: 'Liquid Containers',
  },
  fields: [
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      required: true,
    },
    {
      name: 'color',
      label: 'Color',
      type: 'text',
      defaultValue: '#0000ff',
    },
    {
      name: 'viscosity',
      label: 'Viscosity',
      type: 'number',
      defaultValue: 5,
      admin: {
        step: 0.1,
      },
    },
    {
      name: 'speed',
      label: 'Speed',
      type: 'number',
      defaultValue: 0.5,
      admin: {
        step: 0.1,
      },
    },
  ],
}
