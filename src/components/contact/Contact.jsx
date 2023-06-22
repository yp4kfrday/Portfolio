import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

import './contact.css'
import { FiMail, FiGithub } from 'react-icons/fi'
import { TbBrandTelegram } from 'react-icons/tb'

import ContactItem from './ContactItem'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_USER_ID
    )
    .then((response) => {
      // Обработка успешного ответа
      console.log("Email sent successfully!", response);
      e.target.reset();
    })
    .catch((error) => {
      // Обработка ошибки при отправке
      console.error("Error sending email:", error);
    });
  };
  const contactData = [
    {
      icon: <FiMail />,
      titleName: 'email',
      titleLink: 'dstrctnex@gmail.com',
      link: 'mailto:dstrctnex@gmail.com'
    },
    {
      icon: <TbBrandTelegram />,
      titleName: 'Telegram',
      titleLink: '@yp4esay',
      link: 'https://t.me/yp4esay'
    },
    {
      icon: <FiGithub />,
      titleName: 'Github',
      titleLink: 'https://github.com/yp4kfrday',
      link: 'https://github.com/yp4kfrday'
    },
  ];

  return (
    <section id='contact'>
      <h5>Связаться со мной</h5>
      <h2>Контакты</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          {contactData.map((item, index) => (
            <ContactItem key={index} icon={item.icon} titleName={item.titleName} titleLink={item.titleLink} link={item.link} />
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Ваше  имя' required />
          <input type='email' name='email' placeholder='Ваш email' required />
          <textarea name='message' rows='7' placeholder='Ваше сообщение' required ></textarea>
          <button type='submit' className='btn btn-primary'>Отправить сообщение</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
