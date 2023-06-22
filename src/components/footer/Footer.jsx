import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
    <a href='#' className='footer__logo'>Xисматуллин Aрсен</a>

      <ul className='permlinks'>
        <li><a href='#about'>Обо мне</a></li>
        <li><a href='#experience'>Навыки</a></li>
        <li><a href='#portfolio'>Портфолио</a></li>
        <li><a href='#contact'>Контакты</a></li>
      </ul>


      <div className='footer__copyright'>
        <small>&copy; yp4kfrday React</small>
      </div>
    </footer>
  )
}

export default Footer
