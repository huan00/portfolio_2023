import './home.css'
import { useMediaQuery } from 'react-responsive'
import FrontScreen from '../../components/frontScreen/FrontScreen'
import BackScreen from '../../components/backScreen/BackScreen'
import InnerScreen from '../../components/innerScreen/InnerScreen'
import IphoneScreen from '../../components/iphoneScreen/IphoneScreen'

const Home = ({ flipScreen, handleFlipScreen }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

  return (
    <>
      {isMobile ? (
        <div>
          <IphoneScreen />
        </div>
      ) : (
        <div className="app__home">
          <div className="app__home__half-page first-half" ref={flipScreen}>
            <FrontScreen handleFlipScreen={handleFlipScreen} />
            <BackScreen />
          </div>
          <div className="app__home__half-page second-half"></div>
          <InnerScreen />
        </div>
      )}
    </>
  )
}

export default Home
