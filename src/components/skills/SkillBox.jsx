import React from 'react'
import "./SkillsStyle.css"

function SkillBox({skill}) {
  return (
    <div className='skill-box'>
        <p>{skill}</p>

    </div>
  )
}

export default SkillBox
