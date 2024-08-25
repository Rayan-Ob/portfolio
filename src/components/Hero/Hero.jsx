import React from 'react'
import "./HeroStyle.css"
import developer from "../../../public/images/front-girl.svg"

function Hero() {
  return (
    <div className='hero-base'>
      <div className='hero'>
        <p id='hey'>Hey, I'm</p>
        <h1>Rayan Obeid</h1>
        <h2>Front End Developer</h2>
        <p id='welcome'>Welcome to my portfolio. Explore my work and let's create something extraordinary together.</p>
      </div>

      <div id='hero-img'>
        <img src={developer} alt="front-end-developer" />
      </div>

    </div>
  )
}

export default Hero