import React from 'react'

const ContactItem = ({ icon, titleName, titleLink, link }) => {
    return (
        <>
            <article className='contact__option'>
            <div className='contact__option-icon'>{icon}</div>
                <h4>{titleName}</h4>
                <h5>{titleLink}</h5>
                <a href={link}>Отправить сообщение</a>
            </article>
        </>
    )
}

export default ContactItem