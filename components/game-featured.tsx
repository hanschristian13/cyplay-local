import React from 'react'
import Image from 'next/image'
import CardFeatured1 from '@/public/assets/card-featured-1.webp'
import CardFeatured2 from '@/public/assets/card-featured-2.webp'
import CardFeatured3 from '@/public/assets/card-featured-3.webp'

const GameFeature = () => {
  return (
    <div className='container mx-auto max-w-6xl px-4'>
      <div className='flex flex-col gap-y-6'>
        <h3 className='text-center leading-7'>we provide</h3>
        <div className='flex flex-col gap-y-3 mx-auto'>
          <Image
            alt='featured 1'
            src={CardFeatured1.src}
            width={650}
            height={271}
            quality={100}
            className='w-full max-w-[650px]'
          />
          <Image
            alt='featured 2'
            src={CardFeatured2.src}
            width={650}
            height={271}
            quality={100}
            className='w-full max-w-[650px]'
          />
          <Image
            alt='featured 3'
            src={CardFeatured3.src}
            width={650}
            height={271}
            quality={100}
            className='w-full max-w-[650px]'
          />
        </div>
      </div>
    </div>
  )
}

export default GameFeature