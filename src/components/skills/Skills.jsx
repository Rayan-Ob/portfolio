import React from 'react'
import "./SkillsStyle.css"
import SkillBox from './SkillBox'

function Skills() {
    return (
        <div className='skills-main' id='skills'>
                <h2>Skills</h2>
            
            <div className='skills-boxes'>
            <SkillBox skill="HTML"/>
            <SkillBox skill="CSS"/>
            <SkillBox skill="JavaScript"/>
            <SkillBox skill="React"/>
            <SkillBox skill="React Hooks"/>   
            <SkillBox skill="Bootstrap"/>
            <SkillBox skill="Tailwind"/>
            <SkillBox skill="API"/>
            <SkillBox skill="Git & Githup"/>
            <SkillBox skill="React vite"/>
            <SkillBox skill="React webpack"/>
            <SkillBox skill="Figma"/>
            <SkillBox skill="Responsive Design"/>
            <SkillBox skill="Trello"/>
            <SkillBox skill="Microsoft Office"/>
            </div>

            


          
        </div>
    )
}

export default Skills