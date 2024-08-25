import React from 'react'
import "./AchievementsStyle.css"

function Certification({image,text,company}) {
  return (
    <div className='certification'>
        <img src={image} alt="" />
        <p><span>{company}</span>
       {text}</p>
    </div>
  )
}

export default Certification