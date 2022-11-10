import React from 'react'
import cardimage from '../images/cardimage.jpg'

function Cards(props) {
    return (
        <div className={props.cardType}>
            <div className='cardsimage__container'>
                <img src={cardimage} alt="logo" className='cards__img' />
            </div>
            <div className='cards__info'>
                <span className='cards__info__title'>
                    {props.title}
                </span>
                <span className='cards__info__content'>
                    {props.content}
                </span>
            </div>
        </div>
    )
}

export default Cards