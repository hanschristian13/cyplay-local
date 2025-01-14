import React from 'react'
import IconTelegram from '@/public/assets/telegram.svg'
import IconWhatsapp from '@/public/assets/whatsapp.svg'
import IconEmail from '@/public/assets/email.svg'
import Image from 'next/image'

const About = () => {
  return (
    <div className='flex items-center flex-col gap-y-3 text-white/60 text-xs mb-6'>
      <div className='flex gap-x-3'>
        <div className='flex gap-x-1 items-center'>
          <Image
            alt='icon telegram'
            src={IconTelegram}
            width={16}
            height={16}
          />
          @cyplay
        </div>
        <div className='flex gap-x-1 items-center'>
          <Image
            alt='icon telegram'
            src={IconWhatsapp}
            width={16}
            height={16}
          />0825-9891-3265</div>
        <div className='flex gap-x-1 items-center'>
          <Image
            alt='icon telegram'
            src={IconEmail}
            width={16}
            height={16}
          />contact@cyplay.gg</div>
      </div>
      <div>© 2023 Copyright CYPlay All right reserved.</div>
    </div>
  )
}

export default About