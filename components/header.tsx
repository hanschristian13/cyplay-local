'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoCyPlay from '@/public/assets/logo.webp'
import BurgerMenu from '@/components/burger-menu'

const Header = () => {
  return (
    <header>
      <div className="relative aspect-[89/29] h-[29px]">
        <Link href={"/"}>
          <Image
            alt='logo cyplay'
            src={logoCyPlay.src}
            fill
            sizes='100vw'
            style={{ 
              objectFit: 'contain' }}
          />
        </Link>
      </div>
      <BurgerMenu />
    </header>
  )
}

export default Header