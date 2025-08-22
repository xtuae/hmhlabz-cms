import React from 'react'
import { getSettings } from '@/utilities/getSettings'
import { Media as MediaType } from '@/payload-types'
import Image from 'next/image'

export default async function BeforeLogin() {
  const settings = await getSettings()
  const logo = settings.logoDark as MediaType

  return (
    <div>
      {logo?.url && (
        <Image
          src={logo.url}
          alt={logo.alt || 'Logo'}
          width={logo.width || 200}
          height={logo.height || 50}
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
