'use client'

import Link from 'next/link'
import React from 'react'

interface ButtonLinkProps {
  url: string;
  children?: React.ReactNode;
}

const ButtonPlay: React.FC<ButtonLinkProps> = ({ url, children }) => {
  return (
    <Link 
      href={url}
      className='flex items-center justify-center w-full h-12 rounded-3xl text-[var(--text-color)] text-sm font-bold'
      target='_blank'
      rel='noopener noreferrer'
      style={{
        background: 'linear-gradient(0deg, #FFBC00, #FFBC00), linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
        borderImageSource: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 65%)',
        boxShadow: '0px 0px 0px 1px rgba(121, 92, 11, 0.76), 0px 1px 2px 0px rgba(51, 38, 1, 0.41), inset 0px 2px 0px rgba(255,255,255,0.3)'
      }}
    >{children ?? 'Play Demo'}</Link>
  )
}

export default ButtonPlay