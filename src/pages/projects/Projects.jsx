import React from 'react'
import './projects.css'

import { projects } from '../../constants/projects'

const Projects = ({ setSelect, setProject }) => {
  const handleSetProject = (project) => {
    setSelect('project')
    setProject(project)
  }

  return (
    <div className="app__projects">
      {projects.map((project) => (
        <div
          key={Math.random() + project.name}
          className="project__container"
          onClick={() => handleSetProject(project)}
        >
          <img src={project.imgUrl} alt={project.name} />
          <p>{project.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Projects
