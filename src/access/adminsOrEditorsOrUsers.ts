import type { Access } from 'payload'

import type { User } from '@/payload-types'

export const adminsOrEditorsOrUsers: Access<User> = ({ req: { user } }) => {
  if (
    user?.roles?.includes('admin') ||
    user?.roles?.includes('editor') ||
    user?.roles?.includes('user')
  ) {
    return true
  }

  return false
}
