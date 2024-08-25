import React from 'react'
import "./NavbarStyle.css"
import { Link } from 'react-router-dom'



function NavbarItems({ classItem }) {
    return (
        <div> 
            <ul  className={classItem}>
            <li className='nav-li'><a href="/">Home</a></li>
                <li className='nav-li'> <a href="#about">   About</a></li>
                <li className='nav-li'> <a href="#skills">Skills</a></li>
                <li className='nav-li'> <a href="#portfolio">Portfolio</a> </li>
                <li className='nav-li' > <a href="#contact">Contact</a> </li>
            </ul>
       
        </div>
    )
}

export default NavbarItems