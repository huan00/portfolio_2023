import React from 'react'
import './project.css'

import visit from '../../assets/images/icons/send.png'

const Project = ({ project }) => {
  return (
    <div className="app__project">
      <div className="app__project--img">
        <img src={project.imgUrl} alt="" />
      </div>
      <div className="app__project__desc">
        <h4>{project.name}</h4>
        <p>{project.desc}</p>
        <div className="project--tech">
          {project.tech.map((tech) => (
            <p>{tech}</p>
          ))}
        </div>
        <div className="project--link">
          <a href={project.url} target="_blank" rel="noreferrer">
            <img src={visit} alt="visit" />
            <p>visit</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
