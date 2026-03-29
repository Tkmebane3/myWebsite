import { useState } from 'react'
import './App.css'
import headshot from "./assets/headshot.jpeg";
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ResumeButton from './components/ResumeButton';
import WelcomeDropdown from './components/WelcomeDropdown';

function App() { 
  const [showAbout, setShowAbout] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  return (
  <div className = "container">
   <WelcomeDropdown />
   <div className="scrollContainer">
      <div className="scrollTrack">
        <h1>
          Kelwyn G. Mebane II - Software Developer - Cloud Practitioner
        </h1>
        <h1>
          Kelwyn G. Mebane II - Software Developer - Cloud Practitioner
        </h1>
      </div>
   </div>
    <img src= {headshot} id= "headshot"/>
    <div className="contentSection">
      <div className="navRow">
        <button onClick={()=>{setShowAbout(!showAbout); setShowProjects(false)}}>About Me </button>
        <button onClick={()=>{setShowProjects(!showProjects); setShowAbout(false)}}>My Projects </button>
        <ResumeButton />
      </div>
      <div className="contentArea">
        {showAbout && <AboutMe />}
        {showProjects && <MyProjects />}
      </div>
    </div>
  </div>
  )
}
export default App
