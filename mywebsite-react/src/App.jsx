import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import headshot from "./assets/headshot.jpeg";

function App() { //About section finished, pick up My Portfolio section over weekend and convert each section into individual component files
  const [showAbout, setShowAbout] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  return (
  <div className = "container">
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
    <div className = "aboutme">
     <button onClick={()=>setShowAbout(!showAbout)}>About Me </button>
     {showAbout && (
      <>
      <h2> About me:</h2>
      <p> I am a current Computer Science graduate student and certified AWS Cloud Practitioner with a year of experience 
        feeding my passion for building scalable, high-performance software that delievers exceptional user experiences. 
        I currently work as a Full-Stack Developer Intern at SkyIt, where I contribute to software solutions by cleaning code 
        and documenting the flow of API mappings, configuration dependencies, and validation logic to assist developers and QA teams better 
        understand the relationship between UI components, API endpoints, and system configuration. </p>
      <p>In the summer of 2026, I will be joining CashBlack as a Full-Stack Developer intern where I look forward to playing a key role 
        in helping the company go from a white-label platform to a fully owned product by rebuilding the frontend and backend, migrating data,
        and cloud deployment.</p> 
      <p>I thrive in environments that encourage curiosity, accountability, and continous learning. I actively seek out new technical challenges as 
        opportunities to grow and strengthen my engineering skills. My development approach is dirven by an obsession with user satisfaction, which motivates me to 
        design maintainable software architectures that prioritize performance, scalability, and reliability with modern cloud infrastructure considerations
        in mind. </p>
      </>)}
     </div>
     <div className= "Projects">
      <button onClick={()=>setShowProjects(!showProjects)}> My Projects </button>
      {showProjects && (
        <>
        <h2> My Projects:</h2> 
        </>
      )}
      </div>
  </div>
  )
}
export default App
