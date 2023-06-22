import React from 'react';

const PortfolioItem = ({ image, title, link }) => (
    <article className='portfolio__item'>
        <div className='portfolio__item-image'>
            <img src={image} alt='img' />
        </div>
        <h3>{title}</h3>
        <div className='portfolio__item-cta'>
            <a href={link} className='btn'>Github</a>
        </div>
    </article>
);

export default PortfolioItem;