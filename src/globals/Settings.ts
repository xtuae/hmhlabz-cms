import type { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'favicon',
      label: 'Favicon',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Main Logo',
          fields: [
            {
              name: 'logoLight',
              label: 'Logo (Light)',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'logoDark',
              label: 'Logo (Dark)',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        {
          label: 'Mobile Logo',
          fields: [
            {
              name: 'mobileLogo',
              label: 'Mobile Logo',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'homepage',
      label: 'Homepage',
      type: 'relationship',
      relationTo: 'pages',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Custom Code',
          fields: [
            {
              name: 'customCSS',
              label: 'Custom CSS',
              type: 'code',
              admin: {
                language: 'css',
              },
            },
            {
              name: 'headScripts',
              label: 'Scripts at Start of Body',
              type: 'code',
              admin: {
                language: 'html',
              },
            },
            {
              name: 'bodyScripts',
              label: 'Scripts at End of Body',
              type: 'code',
              admin: {
                language: 'html',
              },
            },
          ],
        },
      ],
    },
  ],
}
