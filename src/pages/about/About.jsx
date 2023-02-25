import React from 'react'
import profilePic from '../../assets/images/profilePicture.jpg'
import './about.css'
import { useMediaQuery } from 'react-responsive'

const About = ({ setSelect }) => {
  const isMobile = useMediaQuery({ query: '(max-width:600px)' })
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
          {isMobile ? (
            <a href="mailto:hello@huan-zeng.com">E-Mail</a>
          ) : (
            <button onClick={() => setSelect('email')}>E-mail</button>
          )}
          <a
            href="https://drive.google.com/file/d/1pW0Fvt6CtcWz3hlNe_sQbDcLheG-MuWb/view?usp=sharing"
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
