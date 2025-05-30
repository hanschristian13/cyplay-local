import Image from 'next/image'
import React from 'react'
import About from './about'
import ImageSertification from '@/public/assets/certification-icon.png'

const Sertification = () => {
  return (
    <div className='relative flex flex-col gap-y-6 px-[17px]'>
      <h3 className='text-center leading-7 text-[#4D4D4D] font-semibold text-[24px]'>International Certification</h3>
      <p className='text-center text-[#72757A] text-[14px] max-w-2xl mx-auto'>CYPLAY RNG is certified by BMM, meeting strict international gaming standards. This certification ensures top-quality gaming performance and sets a high industry benchmark.</p>
      <Image
        alt='certification'
        src={ImageSertification.src}
        width={400}
        height={400}
        className='mt-8 mx-auto w-full max-w-xs object-contain'
      />
      <About />
    </div>
  )
}

export default Sertification