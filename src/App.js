import { useRef } from 'react'
import './app.css'

import Home from './pages/home/Home'

const App = () => {
  const flipScreen = useRef(null)

  const handleFlipScreen = () => {
    flipScreen.current.classList.toggle('active')
    flipScreen.current.classList.toggle('no-after')
  }
  return (
    <div className="app">
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: '-10',
          perspective: '-3000px',
          cursor: 'pointer',
          transform: 'translateZ(-550px)'
        }}
        onClick={handleFlipScreen}
      ></div>
      <Home flipScreen={flipScreen} />
    </div>
  )
}

export default App
