import React from 'react'
import "./ContactStyle.css"
import { Link } from 'react-router-dom'




function Contact() {
  return (

    <div className='contact' id='contact'>
      <div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >

      <div className="context">
        <h2>Contact </h2>
        <div className='contact-me'>

          <p id='contact-text'>
            You have an idea ? <br />
            You need a programmer for executing it ?<br />
            You can contact with me
          </p>
          <div className='contact-data'>
            <p><span>Name : </span>Rayan Obeid</p>
            <p><span>Email : </span> rayan.obeid93@gmail.com </p>
            <p><span>Phone : </span> +963945491937</p>
            <p><span>Country : </span> Syria</p>
          </div>
          <div className='icons'>
            <Link className="btn btn-floating ro-icon-border " to="https://www.facebook.com/rayyan.obied?mibextid=ZbWKwL" ><i
              className="fab fa-facebook-f ro-icon-footer"></i></Link>
            <Link className="btn btn-outline btn-floating ro-icon-border" to="https://github.com/Rayan-Ob" ><i
              className="fab fa-github ro-icon-footer"></i></Link>
            <Link className='btn  btn-floating ro-icon-border' to='https://www.linkedin.com/in/rayan-obeid-a314b327b'><i
              className="fab fa-linkedin-in ro-icon-footer"></i></Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact