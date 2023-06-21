import React from 'react'

const AboutCard = ({ icon, title, description }) => {
  return (
    <article className='about__card'>
      {icon}
      <h5>{title}</h5>
      <small>{description}</small>
    </article>
  )
}

export default AboutCard