import React from 'react'
import logo from "/finaltitle.png"
import "./CompoStyles.css"


function Welcome() {
  return (
    <div className='welcome-container'>
      <img src={logo} alt="" className='welcome-logo'/>
      <p>View and Text directly to people present in the chat Rooms.</p>
    </div>
  )
}

export default Welcome
