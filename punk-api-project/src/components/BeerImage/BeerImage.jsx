import React from 'react'
import './BeerImage.scss';

const BeerImage = ({ name, beerImage}) => {

  // converts a string to a proper string - makes first letter a capital
  const toProper = (string) => {
    return string[0].toUpperCase() + string.substring(1);
  }

  return (
    <>
      <article className='beer-image-card' >
        <h2 className='beer__heading' >{toProper(name)}</h2>
        <img src={beerImage} alt={ toProper(name)}className="beer__image" />
      </article>
    </>
  )
}

export default BeerImage