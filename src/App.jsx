import HeroSection from './Components/HeroSection'
import Venue from "./Components/Venue"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HeroSection />}></Route>
        <Route path='/venue' element={<Venue />}></Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
