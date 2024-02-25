import HeroSection from './Components/HeroSection'
import Sponsors from './Components/Sponsors'
import Venue from "./Components/Venue"
import HackathonHostingPage from "./Components/HackathonHostingPage"
import JudgesMentors from "./Components/JudgesMentors"
import Catering from "./Components/Catering"
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-slate-900 h-screen overflow-y-scroll'>
    <Router>
      <Routes>
        <Route path='/' element={<HeroSection />}></Route>
        <Route path='/venue' element={<Venue />}></Route>
        <Route path='/sponsors' element={<Sponsors />}></Route>
        <Route path='/hackathons' element={<HackathonHostingPage />}></Route>
        <Route path='/catering' element={<Catering />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/judges&mentors' element={<JudgesMentors />}></Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App
