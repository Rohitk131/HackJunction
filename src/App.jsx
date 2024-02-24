import HeroSection from './Components/HeroSection'
import Sponsors from './Components/Sponsors'
import Venue from "./Components/Venue"
import HackathonHostingPage from "./Components/HackathonHostingPage"
import Catering from "./Components/Catering"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HeroSection />}></Route>
        <Route path='/venue' element={<Venue />}></Route>
        <Route path='/sponsors' element={<Sponsors />}></Route>
        <Route path='/HackathonHostingPage' element={<HackathonHostingPage />}></Route>
        <Route path='/catering' element={<Catering />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
