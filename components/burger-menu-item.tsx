'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const BurgerMenuItem = ({
  children,
  pathname,
  target,
  toggleMenu
}: {
  children: React.ReactNode,
  pathname: string,
  target: string,
  toggleMenu: () => void
}) => {
  const router = useRouter()
  return (
    <div
      onClick={() => {
        toggleMenu()
        router.push(target)
      }}
      className={`relative flex flex-col px-4 py-[10px] items-center text-white ${pathname === target ? 'bgmenu' : ''}`}
    >
      {children}
      {pathname === target && <React.Fragment>
      <div className='absolute flex items-center top-0 bottom-0 my-auto left-0'>
        <svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.96728 11L-0.364812 14.7632L-0.36481 7.23688L3.96728 11Z" fill="#FFBC00"/>
        <path d="M-0.458254 4.63158L-0.458253 -2.95052e-06L10.7917 10.7105L-0.458259 22L-0.458257 17.3684L6.50603 10.7105L-0.458254 4.63158Z" fill="#FFBC00"/>
        </svg>
      </div>
      <div className='absolute flex items-center top-0 bottom-0 my-auto right-0 rotate-180'>
        <svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.96728 11L-0.364812 14.7632L-0.36481 7.23688L3.96728 11Z" fill="#FFBC00"/>
        <path d="M-0.458254 4.63158L-0.458253 -2.95052e-06L10.7917 10.7105L-0.458259 22L-0.458257 17.3684L6.50603 10.7105L-0.458254 4.63158Z" fill="#FFBC00"/>
        </svg>
      </div>
      </React.Fragment>}
    </div>
  )
}

export default BurgerMenuItem