import type { CollectionBeforeChangeHook, CollectionConfig } from 'payload'
import sharp from 'sharp'

const compressAndConvertToWebP: CollectionBeforeChangeHook = async ({ req, data }) => {
  if (req.file && req.file.data) {
    const { file } = req
    const isImage = file.mimetype.startsWith('image/') && file.mimetype !== 'image/svg+xml'

    if (isImage) {
      try {
        const buffer = await sharp(file.data).webp({ quality: 80 }).toBuffer()

        const originalFilename = file.name
        const newFilename =
          originalFilename.substring(0, originalFilename.lastIndexOf('.')) + '.webp'

        // Replace the file data on the request object
        req.file = {
          ...file,
          data: buffer,
          name: newFilename,
          mimetype: 'image/webp',
          size: buffer.length,
        }
      } catch (error) {
        console.error('Error processing image:', error)
      }
    }
  }

  return data
}

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Media: CollectionConfig = {
  slug: 'media',
  hooks: {
    beforeChange: [compressAndConvertToWebP],
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      //required: true,
    },
    {
      name: 'caption',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
    },
  ],
  upload: {
    adminThumbnail: 'thumbnail',
    focalPoint: true,
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
      },
      {
        name: 'square',
        width: 500,
        height: 500,
      },
      {
        name: 'small',
        width: 600,
      },
      {
        name: 'medium',
        width: 900,
      },
      {
        name: 'large',
        width: 1400,
      },
      {
        name: 'xlarge',
        width: 1920,
      },
      {
        name: 'og',
        width: 1200,
        height: 630,
        crop: 'center',
      },
    ],
  },
}
