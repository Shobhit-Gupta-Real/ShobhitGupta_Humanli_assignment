import React from 'react'
import "./CompoStyles.css"
import logo from "/finaltitle.png"
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion';

function User_Groups() {
  return (
    <AnimatePresence>
    <motion.div 
    initial={{opacity:0, scale:0}}
    animate={{opacity:1, scale: 1}}
    exit={{opacity:0, scale: 0}}
    transition={{
      ease: "anticipate",
      duration: "0.2"
    }} className='list-container'>
      <div className="ug-header">
        <img src={logo} alt="" style={{height: "2rem", widows: "2rem"}}/>
        <p className='ug-title'>Online User</p>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon/>
        </IconButton>
        <input type="text" placeholder='Search' className='search-box'/>
      </div>
      <div className="ug-list">
        <div className="list-tem">
          <p className='con-icon'>T</p>
          <p className='con-title'>Test User</p>
        </div>
        <div className="list-tem">
          <p className='con-icon'>T</p>
          <p className='con-title'>Test User</p>
        </div>
        <div className="list-tem">
          <p className='con-icon'>T</p>
          <p className='con-title'>Test User</p>
        </div>
        <div className="list-tem">
          <p className='con-icon'>T</p>
          <p className='con-title'>Test User</p>
        </div>
        <div className="list-tem">
          <p className='con-icon'>T</p>
          <p className='con-title'>Test User</p>
        </div>
      </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default User_Groups
