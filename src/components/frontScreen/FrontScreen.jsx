import React from 'react'
import { email, doc } from '../../assets/images/icons/export'
import './frontScreen.css'
const FrontScreen = () => {
  return (
    <div className="app__front-face">
      <div>
        <p>11:22 PM</p>
        <p>Thu, Feburary 23</p>
      </div>
      <div>
        <p>IF FOUND PLEASE RETURN TO:</p>
        <p>Huan Zeng</p>
        <p>
          A Software Engineer with a passion for developing innovated
          application and machine learning.
        </p>
        <p></p>
      </div>
      <div className="app__front-face__footer">
        <div className="app__front-face__footer--img">
          <img src={email} alt="email" />
          <p>Email</p>
        </div>
        <div className="app__front-face__footer--img">
          <img src={doc} alt="resume" />
          <p>Resume</p>
        </div>
      </div>
    </div>
  )
}

export default FrontScreen
