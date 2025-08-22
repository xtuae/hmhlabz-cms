'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Media as MediaType } from '@/payload-types'
import RichText from '@/components/RichText'

type Props = {
  backgroundImage: MediaType
  content: any
}

export const ParallaxSection: React.FC<Props> = ({ backgroundImage, content }) => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])

  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      {backgroundImage?.url && (
        <motion.div style={{ y, position: 'absolute', inset: 0, zIndex: -1 }}>
          <img
            src={backgroundImage.url}
            alt={backgroundImage.alt || ''}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </motion.div>
      )}
      <div style={{ position: 'relative', zIndex: 1, padding: '100px 0' }}>
        <RichText data={content} />
      </div>
    </div>
  )
}
