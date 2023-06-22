import React from 'react'
import "./nav.css"
import {BiHomeAlt2, BiBook, BiMessageAltDetail} from "react-icons/bi"
import {AiOutlineUser} from "react-icons/ai"

import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
    <a href="#"
    onClick={() => setActiveNav('#')}
    className={activeNav === '#' ? 'active' : ''}><BiHomeAlt2/></a>
    <a href="#experience" 
    onClick={() => setActiveNav('#experience')}
    className={activeNav === '#experience' ? 'active' : ''}><AiOutlineUser/></a>
    <a href="#portfolio" 
    onClick={() => setActiveNav('#portfolio')}
    className={activeNav === '#portfolio' ? 'active' : ''}><BiBook/></a>
    <a href="#contact" 
    onClick={() => setActiveNav('#contact')}
    className={activeNav === '#contact' ? 'active' : ''}><BiMessageAltDetail/></a>
    </nav>
  )
}

export default Nav
