import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoCyPlay from '@/public/assets/logo-black.svg';
//import BurgerMenu from '@/components/burger-menu';

const Header = () => {
  return (
    <header className="px-[22.78px] h-[72.67px] absolute top-0  shadow-background shadow-lg w-screen bg-background backdrop-blur-xl flex items-center justify-between  z-10 sticky top-0 ">
      <div className="relative aspect-[89/29] h-[37px] w-[111px]">
        <Link href={'/'}>
          <Image
            alt="logo cyplay"
            src={logoCyPlay.src}
            fill
            sizes="100vw"
            style={{
              objectFit: 'contain',
            }}
          />
        </Link>
      </div>
      <div>xxx</div>
      {/* <BurgerMenu /> */}
    </header>
  );
};

export default Header;
