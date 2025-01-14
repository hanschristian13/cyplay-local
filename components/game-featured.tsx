import React from 'react'
import Image from 'next/image'
import CardFeatured1 from '@/public/assets/card-featured-1.webp'
import CardFeatured2 from '@/public/assets/card-featured-2.webp'
import CardFeatured3 from '@/public/assets/card-featured-3.webp'

const GameFeature = () => {
  return (
    <div className='flex flex-col gap-y-6'>
      <h3 className='text-center leading-7'>we provide</h3>
      <div className='flex flex-col gap-y-3 px-4'>
        <Image
          alt='featured 1'
          src={CardFeatured1.src}
          width={650}
          height={271}
          quality={100}
        />
        <Image
          alt='featured 2'
          src={CardFeatured2.src}
          width={650}
          height={271}
          quality={100}
        />
        <Image
          alt='featured 3'
          src={CardFeatured3.src}
          width={650}
          height={271}
          quality={100}
        />
      </div>
    </div>
  )
}

export default GameFeature