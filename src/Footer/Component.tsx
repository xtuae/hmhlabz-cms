import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { getSettings } from '@/utilities/getSettings'
import Image from 'next/image'

import type { Footer, Setting, Media as MediaType } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()
  const settingsData: Setting = await getSettings()
  const logo = settingsData.logoDark as MediaType

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          {logo?.url ? (
            <Image
              src={logo.url}
              alt={logo.alt || 'Logo'}
              width={logo.width || 200}
              height={logo.height || 50}
              style={{ maxHeight: '50px', width: 'auto' }}
            />
          ) : (
            <Logo />
          )}
        </Link>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div>
      </div>
    </footer>
  )
}
