import { useState, useEffect } from 'react'

function WelcomeDropdown() {
  const [showDropdown, setShowDropdown] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDropdown(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showDropdown && (
        <div className="welcomeDropdown">
          <p>I'm Kelwyn, thanks for visiting my page!</p>
        </div>
      )}
    </>
  )
}

export default WelcomeDropdown
