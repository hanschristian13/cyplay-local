'use client'

import React from 'react'
import Image from 'next/image'
import GameImage from '@/public/assets/coming-soon.webp'

const ComingSoon = () => {
  return (
    <div className='relative mt-[53px]'>
      <Image
        src={GameImage.src}
        alt='coming soon'
        width={734}
        height={616}
        quality={100}
      />
    </div>
  )
}

export default ComingSoon