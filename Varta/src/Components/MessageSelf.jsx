import React from 'react'
import "./CompoStyles.css"

function MessageSelf() {
    var props2 = {name: "MySelf", message: "This is a Sample Message"};
  return (
    <div className='self-message-container'> 
      <div className="messageBox">
        <p className=''>{props2.message}</p>
        <p className='self-timeStamp'>12:00am</p>
      </div>
    </div>
  )
}

export default MessageSelf
