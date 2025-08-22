'use client'

import React from 'react'
import Goo from 'gooey-react'
import RichText from '@/components/RichText'

type Props = {
  content: any
  color: string
  viscosity: number
  speed: number
}

export const LiquidContainer: React.FC<Props> = ({ content, color, viscosity, speed }) => {
  return (
    <Goo intensity="medium" style={{ filter: `url(#gooey-flubber-${viscosity})` }}>
      <div style={{ backgroundColor: color, padding: '50px', borderRadius: '50%' }}>
        <RichText data={content} />
      </div>
    </Goo>
  )
}
