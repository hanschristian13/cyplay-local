import React from 'react'
import Image from 'next/image'
import Logo from '@/public/assets/logo.png'

const AboutWelcome = () => {
  return (
    <div className='relative z-[1] py-[17px]'>
      <div className='relative pt-[38px] flex flex-col gap-y-[6px] items-center justify-start'>
        <Image
          alt='logo'
          src={Logo.src}
          width={203}
          height={67}
          priority
          loading='eager'
          quality={100}
        />
        <div className='text-[13px] font-normal text-[#4D4D4D]'>WIN WITHOUT LIMITS</div>
      </div>
      <div className='mt-[60px] flex flex-col gap-y-[10px] items-center px-[17px]'>
        <h3 className='text-[24px] text-[#4D4D4D] font-semibold'>about us</h3>
        <p className='text-center text-[14px] text-[#72757A] max-w-2xl mx-auto'>We creates unique, high-quality games with passion and attention to detail. Our mission is to deliver unforgettable gaming experiences.</p>
      </div>
    </div>
  )
}

export default AboutWelcome