import React from 'react'
import './portfolio.css'

import PortfolioItem from './PortfolioItem'

import UNITY from '../../assets/Undefined_ShareImage.png'
import MUSIFY from '../../assets/musify.png'
import ESSONS from '../../assets/essens.png'
import PORTFOLIO from '../../assets/por.png'
import LOVEFIELD from '../../assets/love.png'
import ASSISTANT from '../../assets/assistant.png'

const Portfolio = () => {
  const portfolioData = [
    { image: ESSONS, title: 'Тестовый интернет магазин, реализован на стеке - ReactJS, Typescript, ReduxToolkit, React Router, ReactHooks, SCSS, React Content Loader, React Pagination ', link: 'https://github.com/yp4kfrday/react-essons' },
    { image: MUSIFY, title: 'Проект, реализованный в качестве дипломной работы по курсу Web-разработчик (JQuery)' , link: 'https://github.com/yp4kfrday/web-final' },
    { image: UNITY, title: 'React, TypeScript, CSS Modules, Firebase (В разработке)', link: 'https://github.com/yp4kfrday/UnityHub'},
    { image: PORTFOLIO, title: 'Проект - портфолио (ReactJS)', link: 'https://github.com/yp4kfrday/Portfolio'},
    { image: LOVEFIELD, title: 'Учебный проект по работе на LoveField', link: 'https://github.com/yp4kfrday/lovefield-demo-main'},
    { image: ASSISTANT, title: 'Проект на NextJS, React, Tailwind, Prisma, MongoDB, NextAuth', link: 'https://github.com/yp4kfrday/Assistant'}
  ];

  return (
    <section id='portfolio'>
      <h5>Проекты</h5>
      <h2>Портфолио</h2>

      <div className='container portfolio__container'>
        {portfolioData.map((item, index) => (
          <PortfolioItem key={index} image={item.image} title={item.title} link={item.link} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio
