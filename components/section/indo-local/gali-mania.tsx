'use client'

import React from 'react'
import Image from 'next/image'
import GameImage from '@/public/assets/gali-mania.png'
import ButtonPlay from '@/components/button'

const GaliMania = ({ showButton = false }) => {
  return (
    <div className='relative'>
      <Image
        src={GameImage.src}
        alt='Gali Mania'
        width={750}
        height={1430}
        quality={100}
      />
      {showButton && (
      <div className='absolute bottom-0 w-full px-4 py-[10px]'>
        <ButtonPlay
          url='http://139.162.47.9/ice-2025/demo-game/vanilla-joss/?useMock=true&enableCheat=true'
        />
      </div>
      )}
    </div>
  )
}

export default GaliMania