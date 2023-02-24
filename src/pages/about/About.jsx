import React from 'react'
import profilePic from '../../assets/images/profilePicture.jpg'
import './about.css'

const About = ({ setSelect }) => {
  return (
    <div className="app__about">
      <div className="app__about__profileImg">
        <img src={profilePic} alt="profile_picture" />
      </div>
      <div className="app__about__content">
        <h1>Hello,</h1>
        <h5>A Bit About Me:</h5>
        <p>
          I'm a software engineer with a passion for creating innovated
          applications. I love machine learning and automation. I have a strong
          background in sales and business operations.
        </p>
        <div className="content-btn">
          <a href="#" onClick={() => setSelect('email')}>
            E-mail
          </a>
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQ3x96xobcMD2EMFKUXY134445aR1aTwN9yOmGh3G_MnI0Ekj7OBGZVttEDKOpKToy-2qQeZw0S5eo1/pub"
            download
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
