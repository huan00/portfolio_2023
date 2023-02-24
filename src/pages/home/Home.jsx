import React, { useRef } from 'react'
import './home.css'

import FrontScreen from '../../components/frontScreen/FrontScreen'
import BackScreen from '../../components/backScreen/BackScreen'
import InnerScreen from '../../components/innerScreen/InnerScreen'

const Home = ({ flipScreen }) => {
  return (
    <div className="app__home">
      <div className="app__home__half-page first-half" ref={flipScreen}>
        <FrontScreen />
        <BackScreen />
      </div>
      <div className="app__home__half-page second-half"></div>
      <InnerScreen />
    </div>
  )
}

export default Home
