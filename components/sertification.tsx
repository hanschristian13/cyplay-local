import Image from 'next/image'
import React from 'react'
import About from './about'
import ImageSertification from '@/public/assets/certification-icon.webp'

const Sertification = () => {
  return (
    <div className='relative flex flex-col gap-y-6 px-[17px]'>
      <h3 className='text-center leading-7'>International Certification</h3>
      <p className='text-center text-gray-300 max-w-2xl mx-auto'>CYPLAY RNG is certified by BMM, meeting strict international gaming standards. This certification ensures top-quality gaming performance and sets a high industry benchmark.</p>
      <Image
        alt='sertification'
        src={ImageSertification.src}
        width={137}
        height={137}
        className='mt-8 mx-auto'
      />
      <About />
    </div>
  )
}

export default Sertification