import type { Access } from 'payload'

import type { User } from '@/payload-types'

export const adminsOrEditors: Access<User> = ({ req: { user } }) => {
  if (user?.roles?.includes('admin') || user?.roles?.includes('editor')) {
    return true
  }

  return false
}
