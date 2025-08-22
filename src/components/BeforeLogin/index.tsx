import React from 'react'
import { getSettings } from '@/utilities/getSettings'
import { Media as MediaType } from '@/payload-types'

export default async function BeforeLogin() {
  const settings = await getSettings()
  const { logoDark } = settings

  const logoUrl = (logoDark as MediaType)?.url

  return (
    <div>
      {logoUrl && (
        <img
          src={logoUrl}
          alt="Logo"
          style={{
            maxHeight: '50px',
            width: 'auto',
            marginBottom: '20px',
          }}
        />
      )}
    </div>
  )
}
