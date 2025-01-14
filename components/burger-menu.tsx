'use client'

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import BurgerMenuItem from './burger-menu-item';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();
  return (
    <React.Fragment>
      <button
        className={`group inline-flex w-12 h-12 text-white text-center items-center justify-center rounded shadow-[0_1px_0_theme(colors.slate.950/.04),0_1px_2px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] hover:shadow-[0_1px_0_theme(colors.slate.950/.04),0_4px_8px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] transition ${isOpen ? 'aria-pressed=true' : ''}`}
        aria-pressed={isOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <rect className={`origin-center transition-all translate-x-[3px] duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${isOpen ? 'hidden' : ''}`} y="7" width="10" height="2" rx="1"></rect>
          <rect className={`origin-center -translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1)] ${isOpen ? 'translate-x-0 translate-y-0 -rotate-45' : ''}`} y="7" width="16" height="2" rx="1"></rect>
          <rect className={`origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1)] ${isOpen ? '-translate-x-0 -translate-y-0 rotate-45' : ''}`} y="7" width="16" height="2" rx="1"></rect>
        </svg>
      </button>
      <div 
        className={`flex flex-col gap-y-4 w-full h-[calc(100vh-52px)] py-6 backdrop-blur-xl bg-[rgba(8,9,10,0.8)] ${isOpen ? 'fixed top-[54px] left-0' : 'hidden'}`}
      >
        <BurgerMenuItem
          pathname={pathname}
          target="/"
          toggleMenu={toggleMenu}
        >
          <span className='text-white'>Games</span>
          <span className='text-white/60'>Check out the best of our games</span>
        </BurgerMenuItem>
        <BurgerMenuItem
          pathname={pathname}
          target="/about"
          toggleMenu={toggleMenu}
        >
          <span className='text-white'>About Us</span>
          <span className='text-white/60'>Learn about our products and services</span>
        </BurgerMenuItem>
      </div>
    </React.Fragment>
  );
}
