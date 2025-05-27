'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Mlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (pathname === '/') setActiveIndex(0);
    else if (pathname === '/about') setActiveIndex(1);
  }, [pathname]);
  return (
    <>
      {children}
      <div className="flex justify-center mt-6 fixed bottom-[27.9px] left-1/2 transform -translate-x-1/2 w-[200px] bg-white text-[12px] rounded-full overflow-hidden shadow-md">
        <div className="relative flex w-full">
          {/* Slider indicator */}
          <div
            className="absolute top-0 left-0 h-full w-1/2 bg-[#FBA10F] rounded-full z-0 transition-transform duration-300"
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          />
          <Link
            href="/"
            className={classNames(
              'h-[50px] flex-1 rounded-full z-10 font-bold flex items-center justify-center transition-colors duration-300',
              pathname === '/'
                ? 'text-white font-bold'
                : 'text-[#4D4D4D] font-[400]'
            )}
          >
            Games
          </Link>
          <Link
            href="/about"
            className={classNames(
              'h-[50px] flex-1 rounded-full z-10  flex items-center justify-center transition-colors duration-300',
              pathname === '/about'
                ? 'text-white font-bold'
                : 'text-[#4D4D4D] font-[400]'
            )}
          >
            About Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Mlayout;
