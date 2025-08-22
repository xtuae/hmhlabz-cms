import React from 'react'
import { getSettings } from '@/utilities/getSettings'
import { Media as MediaType } from '@/payload-types'

export const CustomLogo = async () => {
  const settings = await getSettings()
  const { logoDark } = settings

  const logoUrl = (logoDark as MediaType)?.url

  return (
    <img
      src={logoUrl || ''}
      alt="Logo"
      style={{ maxHeight: '50px', width: 'auto' }}
    />
  )
}
