'use client'

import React from 'react'
import Image from 'next/image'
import GameImage from '@/public/assets/cop-buddies.webp'
import ButtonPlay from '@/components/button'

const CopBuddies = ({ showButton = true }) => {
  return (
    <div className='relative'>
      <Image
        src={GameImage.src}
        alt='Cop buddies'
        width={750}
        height={1430}
        quality={100}
      />
      {showButton && (
      <div className='absolute bottom-0 w-full px-4 py-[10px]'>
        <ButtonPlay
          url='http://139.162.47.9/ice-2025/demo-game/cop-buddies/?useMock=true&enableCheat=true'
        />
      </div>
      )}
    </div>
  )
}

export default CopBuddies