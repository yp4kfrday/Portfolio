import React from 'react';

const PortfolioItem = ({ image, title, link }) => (
    <article className='portfolio__item'>
        <div className='portfolio__item-image'>
            <img src={image} alt='img' />
        </div>
        <h3>{title}</h3>
        <div className='portfolio__item-cta'>
            <div className='portfolio__item-button'>
                <a href={link} className='btn'>Github</a>
            </div>
        </div>
    </article>
);

export default PortfolioItem;