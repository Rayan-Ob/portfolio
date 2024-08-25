import React from 'react'
import { Link } from 'react-router-dom'
import "./DetailsStyle.css"
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';


function Details({ image1, about, numberPage, link, technique, name, reactLink, visible,image2,image3 }) {
  return (
    <div className='details'>
      <div>
      <MDBCarousel showControls touch={false}>
      <MDBCarouselItem itemId={1}>
        <img src={image1} className='d-block ' alt='photo' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={image2} className='d-block ' alt='photo' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={image3} className='d-block ' alt='photo' />
      </MDBCarouselItem>
    </MDBCarousel>

      </div>
      <div className='details-text'>
        <h3>{name} Website</h3>
        <p className='link-details'> Link Project : <Link to={link} target='auto_blank'><span style={{ color: "#c50a0a" }}>click</span></Link></p>
        <p> <span className='link-details'>About Project :</span>{about}</p>
        <p className='link-details' style={{ display: visible }}>React Link : <Link to={reactLink} target='auto_blank'><span style={{ color: "#c50a0a" }}>click</span></Link></p>
        <p><span className='link-details'> Pages Number :</span> {numberPage} </p>
        <p><span className='link-details'>Technologies Used :</span>  {technique}</p>
      </div>

    </div>
  )
}

export default Details