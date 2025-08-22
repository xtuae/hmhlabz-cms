import type { CollectionConfig } from 'payload'

export const UsersRole: CollectionConfig = {
  slug: 'users-role',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}
