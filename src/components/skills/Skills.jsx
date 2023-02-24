import React from 'react'
import skills from '../../assets/images/skills/skills.js'

import './skills.css'

const Skills = () => {
  return (
    <div className="app__skills">
      {skills.map((skill) => (
        <div
          className="app__skills__container"
          key={Math.random() + skill.skill}
        >
          <img src={skill.imgUrl} alt={skill.skill} />
          <p>{skill.skill}</p>
        </div>
      ))}
    </div>
  )
}

export default Skills
