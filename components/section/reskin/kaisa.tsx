'use client'

import React from 'react'
import Image from 'next/image'
import GameImage from '@/public/assets/kaisa.png'
import ButtonPlay from '@/components/button'

const Kaisa = ({ showButton = true }) => {
  return (
      <div className='relative'>
        <Image
          src={GameImage.src}
          alt='Kaisa'
          width={750}
          height={1430}
          quality={100}
        />
        {showButton && (
        <div className='absolute bottom-0 w-full px-4 py-[10px]'>
          <ButtonPlay
            url='https://demo.cyberyokai.com/cyplay/slots/reskin-kaisa?useMock=true&enableCheat=true'
          />
        </div>
        )}
      </div>
  )
}

export default Kaisa