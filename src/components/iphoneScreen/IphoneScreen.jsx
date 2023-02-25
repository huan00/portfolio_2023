import { useState } from 'react'
import { app, contacts, home } from '../../assets/images/iphoneIcons/export'
import { linkedin, github } from '../../assets/images/icons/export'

import './iphoneScreen.css'
import Skills from '../skills/Skills'
import About from '../../pages/about/About'
import Projects from '../../pages/projects/Projects'
import Project from '../project/Project'

const IphoneScreen = () => {
  const [select, setSelect] = useState(null)
  const [project, setProject] = useState(null)
  const handleDisplay = (value) => {
    switch (value) {
      case 'about':
        return <About setSelect={setSelect} />
      case 'projects':
        return <Projects setSelect={setSelect} setProject={setProject} />
      case 'project':
        return <Project project={project} />
      default:
        return <Skills />
    }
  }

  const handleSelect = (value) => {
    setSelect(value)
  }
  return (
    <div className="app__iphone-screen">
      {handleDisplay(select)}
      <div className="iphone-screen__footer">
        <div onClick={() => handleSelect('about')}>
          <img src={contacts} alt="about" />
          <p>About</p>
        </div>
        <div onClick={() => handleSelect('projects')}>
          <img src={app} alt="projects" />
          <p>Projects</p>
        </div>
        <div onClick={() => handleSelect()}>
          <img src={home} alt="back" />
          <p>Skills</p>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/huan-zeng/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
            <p>Linkedin</p>
          </a>
        </div>
        <div>
          <a href="https://github.com/huan00" target="_blank" rel="noreferrer">
            <img src={github} alt="github" />
            <p>Github</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default IphoneScreen
