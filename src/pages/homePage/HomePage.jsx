import React from 'react'
import Hero from '../../components/Hero/Hero'
import Aboutme from '../../components/AboutMe/Aboutme'
import Skills from '../../components/skills/Skills'
import Project from '../../components/Projects/Project'
import Achievements from '../../components/Achievements/Achievements'
import Contact from '../../components/Contact/Contact'

function HomePage() {
  return (
    <div>
        <Hero></Hero>
        <Aboutme/>
        <Skills/>
        <Project/>
        <Achievements/>
        <Contact/>
    </div>
  )
}

export default HomePage