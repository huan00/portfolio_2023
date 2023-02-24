import { useRef } from 'react'
import './app.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Project from './components/project/Project'

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
      <Routes>
        <Route path="/" element={<Home flipScreen={flipScreen} />} />
      </Routes>
    </div>
  )
}

export default App
