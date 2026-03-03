import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import headshot from "./assets/headshot.jpeg";

function App() {
  const [showAbout, setShowAbout] = useState(false) //picking up on 3/3
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
  </div>
  )
}
export default App
