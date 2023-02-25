import { useState, useEffect } from 'react'
import { email, doc } from '../../assets/images/icons/export'
import './frontScreen.css'

const FrontScreen = ({ handleFlipScreen }) => {
  const [copy, setCopy] = useState(false)
  const [time, setTime] = useState(null)
  const [date, setDate] = useState(null)
  const handleClick = () => {
    navigator.clipboard.writeText('hello@huan-zeng.com')
    setCopy(true)
    setTimeout(() => {
      setCopy(false)
    }, 2000)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getTime()
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [time])

  const getTime = () => {
    const now = new Date()
    const time = now.toLocaleString('en-us', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    })
    const date = new Date()
    const today = date.toLocaleDateString('en-us', {
      weekday: 'short',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })

    setTime(time)
    setDate(today)
  }

  return (
    <div
      className="app__front-face"
      // onClick={handleFlipScreen}
    >
      <div>
        <p>{time}</p>
        <p>{date}</p>
      </div>
      {copy && <div className="screen--message">E-Mail copy to clipboard</div>}
      <div className="app__front-face__desc">
        <p>IF FOUND PLEASE RETURN TO:</p>
        <p>Huan Zeng</p>
        <p>
          A Software Engineer with a passion for developing innovated
          application and machine learning.
        </p>
        <p></p>
      </div>
      <div className="app__front-face__footer">
        <div className="app__front-face__footer--img" onClick={handleClick}>
          <img src={email} alt="email" />
          <p>Email</p>
        </div>
        <div className="app__front-face__footer--img">
          <a
            href="https://drive.google.com/uc?id=1pW0Fvt6CtcWz3hlNe_sQbDcLheG-MuWb&export=download
            "
            download
            // target="_blank"
            // rel="noreferrer"
          >
            <img src={doc} alt="resume" />
            <p>Resume</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FrontScreen
