import React from 'react'
import Image from 'next/image'
import ImageProvide from '@/public/assets/content.webp'

const Provide = () => {
  return (
    <div className='flex flex-col gap-y-6'>
      <h3 className='text-center leading-7'>we provide</h3>
      <div className='relative'>
        <Image
          alt='provide'
          src={ImageProvide.src}
          width={736}
          height={748}
          quality={100}
        />
      </div>
    </div>
  )
}

export default Provide