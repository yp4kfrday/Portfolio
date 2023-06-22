import React from 'react'
import './about.css'

import FULLME from '../../assets/mefull.jpg'
import { BsFolder } from "react-icons/bs"
import { BiAward } from "react-icons/bi";
import AboutCard from './AboutCardItem';

const About = () => {
  const aboutItemsData = [
    {
      icon: <BiAward />,
      title: 'Я работал над несколькими проектами в области веб-разработки, в которых использовал различные технологии, например: ReactJS, JQuery, Lovefield, ReactJS, TypeScript, Redux Toolkit и jQuery',
    },
    {
      icon: <BsFolder />,
      title: 'Мною было создано 6 проектов, познакомиться с которыми вы сможете ниже',
    },
  ];

  return (
    <section id='about'>

      <div className="container about__container">

        <div className='about__content'>
          <div className="about__cards">
          {aboutItemsData.map((item, index) => (
            <AboutCard key={index} icon={item.icon} title={item.title} description={item.description} />
          ))}
          </div>

          <p>
          Я также хотел бы отметить, что я проходил курс по веб-разработке от университета. В процессе обучения я углубил свои знания в области фронтенд-разработки, изучил различные концепции и лучшие практики, и получил опыт работы с различными инструментами и технологиями, необходимыми для создания современных веб-приложений.
В целом, мои проекты и образование подготовили меня к решению сложных задач в области веб-разработки и позволили мне стать опытным разработчиком с широким спектром навыков.
          </p>

          <a href='#contact' className='btn btn-primary'>Написать</a>
        </div>

        <div className="about__me">
          <div className="about__me-image">
            <img src={FULLME} alt="About Image" />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default About
