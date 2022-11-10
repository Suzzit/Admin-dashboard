import React from 'react'
import Cards from '../components/Cards'

function CardsPage() {
  return (
    <div className='page-wrappers'>
      <h1 className='cardspage__heading'>Cards Showcase</h1>
      <div className='cards-container'>
      <Cards title="Left Image Card" cardType="leftimg-card" content="A sample of card with image on left side" />
        <Cards title="Right Image Card"  cardType="rightimg-card" content="A sample of card with image on Right side" />
        <Cards title="Top Image Card" cardType="topimg-card" content="A sample of card with image on Top" />
      </div>
    </div>
  )
}

export default CardsPage