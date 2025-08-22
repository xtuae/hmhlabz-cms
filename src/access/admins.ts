import type { Access } from 'payload'

import type { User } from '@/payload-types'

export const admins: Access<User> = ({ req: { user } }) => {
  if (user?.roles?.includes('admin')) {
    return true
  }

  return false
}
