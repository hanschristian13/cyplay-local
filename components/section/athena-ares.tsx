'use client'

import React from 'react'
import Image from 'next/image'
import GameImage from '@/public/assets/athena-vs-ares.webp'
import ButtonPlay from '@/components/button'

const AthenaAres = () => {
  return (
    <div className='relative mt-[53px]'>
      <Image
        src={GameImage.src}
        alt='Athena Ares'
        width={750}
        height={1430}
        priority
        quality={100}
        loading='eager'
      />
      <div className='absolute bottom-0 w-full px-4 py-[10px]'>
        <ButtonPlay
          url='http://139.162.47.9/ice-2025/demo-game/athena-vs-ares/?useMock=true&enableCheat=true'
        />
      </div>
    </div>
  )
}

export default AthenaAres