import React from 'react'
import "./BadgeCard.css"

const BadgeCard = ({name, img, points}) => {
  return (
    <div className='single__badge'>
        <img src={img} />
        <h1>{name}</h1>
        <p>{points} 🌟</p>
    </div>
  )
}

export default BadgeCard