import React from 'react'
import './innerScreen.css'
import {
  phone,
  messaging,
  settings,
  camera,
  account,
  chrome,
  email,
  doc,
  github,
  linkedin,
  back,
  apps
} from '../../assets/images/icons/export'
import Skills from '../skills/Skills'

const InnerScreen = () => {
  return (
    <div className="app__inner-screen">
      <div>
        <Skills />
      </div>
      <div className="app__inner-screen__footer">
        <div className="footer--img">
          <img src={account} alt="About" />
          <p>About</p>
        </div>
        <div className="footer--img">
          <img src={apps} alt="project" />
          <p>Project</p>
        </div>
        <div className="footer--img">
          <img src={linkedin} alt="linkedin" />
          <p>linkedin</p>
        </div>
        <div className="footer--img">
          <img src={github} alt="github" />
          <p>github</p>
        </div>
        <div className="footer--img">
          <img src={back} alt="back" />
          <p>back</p>
        </div>
      </div>
    </div>
  )
}

export default InnerScreen
