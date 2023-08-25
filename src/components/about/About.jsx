import React from 'react'
import './about.css'

import FullMe from '../../assets/mefull.jpg'
import { BsFolder } from "react-icons/bs"
import { BiAward } from "react-icons/bi";
import AboutCard from './AboutCardItem';

const About = () => {
  const aboutItemsData = [
    {
      icon: <BiAward />,
      title: 'Разработал больше 6 проектов. Постоянно самосовершенствуюсь и практикую новые технологии.',
    },
    {
      icon: <BsFolder />,
      title: 'В рамках реализации учебных проектов были спроектированы приложения на C++, C#, Python.',
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
            TrueCost - Fullstack developer<br/>
            Проектирование веб-приложения. Переписывание Legacy на современный стек - React, graphsql, typescript. Июнь 2023 по н.в. (3 месяца)
            <br/><br/>
            Университет Иннополис(ЦК в вузе). Самара - Web-разработчик<br/>
            В рамках прохождения стажировки по программе доп. образования от университета "Иннополис"(Казань), велась разработка web-приложения с применением библиотеки JQuery, а также базой данных Lovefield. Курс по данной программе длился 12 месяцев.


          </p>

          <a href='#contact' className='btn btn-primary'>Написать</a>
        </div>

        <div className="about__me">
          <div className="about__me-image">
            <img src={FullMe} alt="About Image" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
