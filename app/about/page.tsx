'use client'

import React from 'react'
import Image from 'next/image'
import BackgroundAbout from '@/public/assets/background-about.webp'
import Provide from '@/components/provide'
import AboutWelcome from '@/components/about-welcome'
import GameFeature from '@/components/game-featured'
import Sertification from '@/components/sertification'
import ImageBgGamingFeatured from '@/public/assets/bg-gaming-featured.webp'
import Transition from '@/components/transition'
const page = () => {
  return (
    <Transition>
      <div className='relative mt-[53px]'>
        <Image
          alt='background About'
          src={BackgroundAbout.src}
          fill
          sizes='100vw'
          className='-z-[1]'
          priority
          loading='eager'
          quality={100}
          style={{
            objectPosition: 'top center',
            objectFit: 'contain',
            aspectRatio: '750/734'
          }}
        />
        <div className='flex flex-col gap-y-[60px]'>
          <AboutWelcome />
          <Provide />
          <div className='relative flex flex-col gap-y-[60px]'>
            <Image
              alt='sertification'
              src={ImageBgGamingFeatured.src}
              className='-z-[1] mt-8 mx-auto'
              fill
              sizes='100vw'
              style={{
                objectPosition: 'canter center',
                objectFit: 'contain',
                aspectRatio: '1/1'
              }}
            />
            <GameFeature />
            <Sertification />
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default page