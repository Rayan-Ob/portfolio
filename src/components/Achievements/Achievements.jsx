import React from 'react'
import "./AchievementsStyle.css"
import Certification from './Certification'



// photos
import focal from "../../../public/images/focal.jpg"
import focalrec from "../../../public/images/focalrec.jpg"
import edrak from "../../../public/images/edrak.jpg"
import coder from "../../../public/images/coders.png"
import acm from "../../../public/images/icpc.png"
import vica from "../../../public/images/vica.jfif"

function Achievements() {
  return (
    <div className='achivements'>
      <h2>Acievements & Certifications</h2>
    
      <div id='certifications'>
      <Certification image={vica} company="Vica Web Solution" text="Advanced Front-end development training"/>
      <Certification image={focal} company="Focal X agency" text=" Beginner front-end development training"/>
      <Certification image={focal} company="Focal X agency" text=" One-month work internship in Front-End development with a performance rating of 90%.  "/>
      <Certification image={focalrec} company="Focal X agency" text=" Recommendation Letter"/>
      <Certification image={coder} company="One Million Arab Coders " text="Full Stack Development Track"/>
      <Certification image={acm} company="ICPC, International Colligiate Programming Contest" text="Contestant Certification"/>
      <Certification image={edrak} company="Edrak platform" text="Excel Spreadsheets"/>
</div>

    </div>
  )
}

export default Achievements