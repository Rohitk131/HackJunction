import HeroSection from './Components/HeroSection'
import Sponsors from './Components/Sponsors'
import Venue from "./Components/Venue"
import HackathonHostingPage from "./Components/HackathonHostingPage"
import Catering from "./Components/Catering"
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HeroSection />}></Route>
        <Route path='/venue' element={<Venue />}></Route>
        <Route path='/sponsors' element={<Sponsors />}></Route>
        <Route path='/hackathons' element={<HackathonHostingPage />}></Route>
        <Route path='/catering' element={<Catering />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
