import React, { useEffect } from 'react'
import { useState } from 'react'
import NavbarItems from './NavbarItems'
import "./NavbarStyle.css"


import  sun from "../../../public/images/sun-w.png"
import moon from "../../../public/images/moon-icon.svg"
import baricon from "../../../public/images/bars-solid.svg"
import bariconBlack from "../../../public/images/bar-s-black.svg"
import closeicon from "../../../public/images/x-solid.svg"
import logo from "../../../public/images/logo-ray.png"
 

function Navbar() {

    //  to toggle betwen mobile and desktop

    const [toggleNav, setToggleNav] = useState(false)
    function handletoggleNav() {
        setToggleNav(!toggleNav)
    }


    // dark and light
    const [theme, settheme] = useState(false)
    const handleClick = () => {
        settheme(!theme)
    }
    useEffect(() => {
        if (theme == true) {
            document.querySelector('body').setAttribute('data-theme', 'dark')
        }
        else {
            document.querySelector('body').setAttribute('data-theme', 'light')
        }
    })


   
    return (
        <div>
            <nav>
                <div className='nav-row'>
                    {/* logo */}
                    <div className='logo'>
                        <img  src={logo} alt="logo" />
                    </div>

                    <NavbarItems classItem="nav-items-row" />

                    {/* dark and light button for desktop */}
                    <button id='dark-light' onClick={handleClick}>
                        <img src={theme ? sun : moon} alt="moon or sun " className='sun' />
                        <span> {theme ? "Light" : "Dark"}</span>
                    </button>

                    {/* bar icon for small sizes */}
                    <img
                        src ={theme ? baricon : bariconBlack}
                        alt=""
                        className="menu-icon"
                        onClick={handletoggleNav}
                    />

                </div>

                {/* Mobile section */}
                {/* toggle between bar icon and close icon */}
                {toggleNav ? (
                    <div className="nav-mobile flex-col color-change">
                        <img
                            src={closeicon}
                            alt=""
                            className="close-icon"
                            onClick={handletoggleNav}
                        />
                        <NavbarItems classItem='nav-mobile-items flex-al-c flex-col' />

                        {/* dark and light for mobile */}

                        <button id='dark-light' className='dark-mob'  onClick={handleClick}>
                        <img src={theme ? sun : moon} alt="moon or sun " className='sun'/>
                        <span> {theme ? "Light" : "Dark"}</span>
                    </button>

                    </div>
                ) : (
                    <></>
                )}
            </nav>

            
        </div>
    )
}

export default Navbar