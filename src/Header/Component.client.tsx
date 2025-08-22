'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import type { Header, Setting, Media as MediaType } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
  settings: Setting
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, settings }) => {
  const [isMounted, setIsMounted] = useState(false)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const logo = settings.logoLight as MediaType
  const darkLogo = settings.logoDark as MediaType

  const theme = isMounted ? headerTheme : null

  return (
    <header className="container relative z-20   " {...(theme ? { 'data-theme': theme } : {})}>
      <div className="py-8 flex justify-between">
        <Link href="/">
          {logo?.url ? (
            <>
              <Image
                src={logo.url}
                alt={logo.alt || 'Logo'}
                width={logo.width || 200}
                height={logo.height || 50}
                className="dark:hidden"
                style={{ maxHeight: '50px', width: 'auto' }}
              />
              <Image
                src={darkLogo?.url || logo.url}
                alt={darkLogo?.alt || logo.alt || 'Logo'}
                width={darkLogo?.width || logo.width || 200}
                height={darkLogo?.height || logo.height || 50}
                className="hidden dark:block"
                style={{ maxHeight: '50px', width: 'auto' }}
              />
            </>
          ) : (
            <Logo loading="eager" priority="high" className="invert dark:invert-0" />
          )}
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
