import { useRef } from 'react'
import './app.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'

const App = () => {
  const flipScreen = useRef(null)

  const handleFlipScreen = () => {
    flipScreen.current.classList.toggle('active')
    flipScreen.current.classList.toggle('no-after')
  }
  return (
    <div className="app">
      <div className="app__open-phone" onClick={handleFlipScreen}></div>
      <Routes>
        <Route
          path="/"
          element={
            <Home flipScreen={flipScreen} handleFlipScreen={handleFlipScreen} />
          }
        />
      </Routes>
    </div>
  )
}

export default App
