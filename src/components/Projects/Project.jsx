import React from 'react'
import "./ProjectStyle.css"
import "./ProjectImage"
import img1 from "../../../public/images/travel.png"
import img2 from "../../../public/images/book.png"
import img3 from "../../../public/images/phone.png"
import img4 from "../../../public/images/store-1.png"
import img5 from "../../../public/images/learn.png"
import img6 from "../../../public/images/calculator.png"
import ProjectImage from './ProjectImage'



function Project() {
  return (
    <div className='project' id='portfolio'>
        <h2>My Projects</h2>

        <div className='images-project'>
            <ProjectImage image={img1} decscription="Travel Website" id="1"/>
            <ProjectImage image={img2} decscription="Books library Website" id="2" />
            <ProjectImage image={img3} decscription="Mobile Phone Website" id="3"/>
            <ProjectImage image={img4} decscription="Online Store Website" id="4"/>
            <ProjectImage image={img5} decscription="Learning Platform Website" id="5" />
            <ProjectImage image={img6} decscription="Calculator Website" id="6"/>   
        </div>
    </div>
  )
}

export default Project