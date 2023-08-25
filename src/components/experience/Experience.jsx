import React from 'react'
import "./experience.css"

import { BsCheckCircle } from 'react-icons/bs'

const Experience = () => {
  const frontendExperience = [
    { title: 'HTML', experience: 'junior' },
    { title: 'CSS', experience: 'junior' },
    { title: 'JavaScript', experience: 'junior' },
    { title: 'React', experience: 'junior' },
    { title: 'SCSS', experience: 'junior' },
    { title: 'JQuery', experience: 'junior' },
    { title: 'TypeScript', experience: 'junior' },
    { title: 'Redux-Toolkit', experience: 'had experience' },
    { title: 'Tailwind', experience: 'had experience' },
    { title: 'Figma', experience: 'had experience' },
    { title: 'Css modules', experience: 'junior' },
  ];

  const backendExperience = [
    { title: 'NodeJS', experience: 'junior' },
    { title: 'LoveField', experience: 'had experience' },
    { title: 'C++', experience: 'had experience' },
    { title: 'Next.js', experience: 'had experience' },
    { title: 'MongoDB', experience: 'had experience' },
    { title: 'RabbitMq', experience: 'had experience' },
    { title: 'SQL', experience: 'had experience' },
    { title: 'Golang ', experience: 'had experience' },
    
  ];

  const otherExperience = [
    { title: 'Git', experience: 'junior' },
    { title: 'Axios-Fetch', experience: 'had experience' },
    { title: 'Prisma', experience: 'had experience'},
    { title: 'OC Ubuntu', experience: 'had experience'},
    { title: 'Docker', experience: 'had experience'},
  ]

  return (
    <section id='experience'>
      <h5>Навыки</h5>
      <h2>Опыт в технологиях</h2>

      <div className='container experience__container'>
        <div className='experience__other'>
          <h3>Frontend</h3>
          <div className='experience__content'>
            {frontendExperience.map((exp, index) => (
              <article className='experience__details' key={index}>
              <BsCheckCircle className='experience__details-icon' />
                <div>
                <h4>{exp.title}</h4>
                <small className='text-light'>{exp.experience}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className='experience__other'>
          <h3>Backend</h3>
          <div className='experience__content'>
          {backendExperience.map((exp, index) => (
              <article className='experience__details' key={index}>
              <BsCheckCircle className='experience__details-icon' />
              <div>
                <h4>{exp.title}</h4>
                <small className='text-light'>{exp.experience}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className='experience__other'>
          <h3>Other</h3>
          <div className='experience__content'>
            {otherExperience.map((exp, index) => (
              <article className='experience__details' key={index}>
              <BsCheckCircle className='experience__details-icon' />
              <div>
                <h4>{exp.title}</h4>
                <small className='text-light'>{exp.experience}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience