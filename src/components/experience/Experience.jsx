import React from 'react'
import "./experience.css"

import { BsCheckCircle } from 'react-icons/bs'

const Experience = () => {
  const frontendExperience = [
    { title: 'HTML', experience: 'Intermediate' },
    { title: 'CSS', experience: 'Intermediate' },
    { title: 'JavaScript', experience: 'Intermediate' },
    { title: 'React', experience: 'Intermediate' },
    { title: 'SCSS', experience: 'Experienced' },
    { title: 'JQuery', experience: 'Experienced' },
    { title: 'TypeScript', experience: 'Experienced' },
    { title: 'Redux-Toolkit', experience: 'Experienced' },
  ];

  const backendExperience = [
    { title: 'NodeJS', experience: 'Experienced' },
    { title: 'LoveField', experience: 'Experienced' },
    { title: 'C++', experience: 'Experienced' },
  ];

  const otherExperience = [
    { title: 'Git', experience: 'Intermediate' },
    { title: 'Axios-Fetch', experience: 'Experienced' },
  ]

  return (
    <section id='experience'>
      <h5>Навыки</h5>
      <h2>Опыт в технологиях</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
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

        <div className='experience__backend'>
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