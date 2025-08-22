import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import { getSettings } from '@/utilities/getSettings'

import type { Header as HeaderType, Setting } from '@/payload-types'

export async function Header() {
  const headerData: HeaderType = await getCachedGlobal('header', 1)()
  const settingsData: Setting = await getSettings()

  return <HeaderClient data={headerData} settings={settingsData} />
}
