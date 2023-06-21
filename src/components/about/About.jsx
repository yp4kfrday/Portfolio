import React from 'react'
import './about.css'

import FullMe from '../../assets/da.png'
import { BsFolder } from "react-icons/bs"
import { BiAward } from "react-icons/bi";
import AboutCard from './AboutCard';

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={FullMe} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
          <AboutCard icon={<BiAward className='about__icon' />} title="Exp" description="work" />
          <AboutCard icon={<BsFolder className='about__icon' />} title="Projects" description="work" />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur Lorem sed Lorem ipsum dolor sit amet, consectetur Lorem sed Lorem ipsum dolor sit amet, consectetur Lorem sed
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
