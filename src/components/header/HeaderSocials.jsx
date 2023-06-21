import React from 'react'
import { AiOutlineGithub} from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/yp4kfrday" target="_blank"><AiOutlineGithub/></a>
        <a href="https://t.me/yp4esay" target="_blank"><BsTelegram/></a>
        <a href="https://github.com" target="_blank"><SiGmail/></a>
    </div>
  )
}

export default HeaderSocials