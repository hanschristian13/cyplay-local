'use client'

import React from 'react'
import Image from 'next/image'
import GameImage from '@/public/assets/energ-super-laga.png'
import ButtonPlay from '@/components/button'

const EnergSuperLaga = ({ showButton = true }) => {
  return (
    <div className='relative'>
      <Image
        src={GameImage.src}
        alt='EnerG Super Laga'
        width={750}
        height={1430}
        quality={100}
      />
      {showButton && (
      <div className='absolute bottom-0 w-full px-4 py-[10px]'>
        <ButtonPlay
          url='http://139.162.47.9/prototype/slot-game/ener-g/v0.12/?useMock=true&enableCheat=true'
        />
      </div>
      )}
    </div>
  )
}

export default EnergSuperLaga