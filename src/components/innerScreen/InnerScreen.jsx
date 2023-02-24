import { useState } from 'react'
import './innerScreen.css'
import {
  account,
  github,
  linkedin,
  back,
  apps
} from '../../assets/images/icons/export'
import Skills from '../skills/Skills'
import About from '../../pages/about/About'
import Email from '../email/Email'
import Projects from '../../pages/projects/Projects'
import Project from '../project/Project'
import { projects } from '../../constants/projects'

const InnerScreen = () => {
  const [select, setSelect] = useState(null)
  const [project, setProject] = useState(null)
  const display = (value) => {
    switch (value) {
      case 'about':
        return <About setSelect={setSelect} />
      case 'email':
        return <Email />
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
    <div className="app__inner-screen">
      <div className="app__inner-screen__hero">{display(select)}</div>
      <div className="app__inner-screen__footer">
        <div className="footer--img" onClick={() => handleSelect('about')}>
          <img src={account} alt="About" />
          <p>About</p>
        </div>
        <div className="footer--img" onClick={() => handleSelect('projects')}>
          <img src={apps} alt="project" />
          <p>Project</p>
        </div>
        <div className="footer--img">
          <a
            href="https://www.linkedin.com/in/huan-zeng/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
            <p>linkedin</p>
          </a>
        </div>
        <div className="footer--img">
          <a href="https://github.com/huan00" target="_blank" rel="noreferrer">
            <img src={github} alt="github" />
            <p>github</p>
          </a>
        </div>
        <div className="footer--img" onClick={() => handleSelect('')}>
          <img src={back} alt="back" />
          <p>back</p>
        </div>
      </div>
    </div>
  )
}

export default InnerScreen
