import Home from './components/pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import AboutMe from './components/pages/AboutMe'
import ContactInfo from './components/pages/ContactInfo'
import Projects from './components/pages/Projects'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/aboutme' Component={AboutMe}/>
          <Route path='/projects' Component={Projects}/>
          <Route path='/contactinfo' Component={ContactInfo}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
