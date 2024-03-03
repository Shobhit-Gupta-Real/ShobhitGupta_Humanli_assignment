import React, { useState } from 'react'
import "./CompoStyles.css"
import SideBar from './SideBar'
import ChatArea from './ChatArea'
import Welcome from './Welcome'
import CreateGroups from './CreateGroups'
import User_Groups from './User_Groups'
import { Outlet, Route, Routes } from 'react-router-dom'

function MainContainer() {
 
  return (
    <div className='main_container'>
      <SideBar/>
      <Outlet/>
      
      {/* <CreateGroups/> */}
      {/* <ChatArea props={conversation}/> */}
      {/* <User_Groups/> */}
      
    </div>
  )
}

export default MainContainer
