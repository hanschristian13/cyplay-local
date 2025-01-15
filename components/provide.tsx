import React from 'react'
import Image from 'next/image'
import ImageProvide from '@/public/assets/content.webp'

const Provide = () => {
  return (
    <div className='container mx-auto max-w-7xl px-4'>
      <div className='flex flex-col gap-y-6'>
        <h3 className='text-center leading-7 text-white'>We Provide</h3>
        <div className='relative max-w-4xl mx-auto'>
          <Image
            alt='provide'
            src={ImageProvide.src}
            width={736}
            height={748}
            quality={100}
            className='w-full'
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Provide