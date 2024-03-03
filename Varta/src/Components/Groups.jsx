import React from 'react'
import "./CompoStyles.css"
import logo from "/finaltitle.png"
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material'
import { useSelector } from 'react-redux';
import {AnimatePresence, motion} from 'framer-motion'

function Groups() {
  const lightTheme = useSelector((state)=>state.themeKey)
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
    <div className={"ug-header" + (lightTheme ? "" : " dark")}>
      <img src={logo} alt="" style={{height: "2rem", widows: "2rem"}}/>
      <p className={'ug-title'+ (lightTheme?"":"dark")}>Groups</p>
    </div>
    <div className={"sb-search" + (lightTheme ? "" : " dark")}>
      <IconButton>
        <SearchIcon className={"icon" + (lightTheme ? "" : " dark")}/>
      </IconButton>
      <input type="text" placeholder='Search' className={"search-box" + (lightTheme ? "" : " dark")}/>
    </div>
    <div className="ug-list">
      <motion.div whileHover={{scale: 1.01}} 
      whileTap={{scale: 0.99}} className={"list-tem" + (lightTheme ? "" : " dark")}>
        <p className={"con-icon" + (lightTheme ? "" : " dark")}>G</p>
        <p className={"con-title" + (lightTheme ? "" : " dark")}>Test Groups</p>
      </motion.div>
      <motion.div whileHover={{scale: 1.01}} 
      whileTap={{scale: 0.99}} className={"list-tem" + (lightTheme ? "" : " dark")}>
        <p className={"con-icon" + (lightTheme ? "" : " dark")}>G</p>
        <p className={"con-title" + (lightTheme ? "" : " dark")}>Test Groups</p>
      </motion.div>
      <motion.div whileHover={{scale: 1.01}} 
      whileTap={{scale: 0.99}} className={"list-tem" + (lightTheme ? "" : " dark")}>
        <p className={"con-icon" + (lightTheme ? "" : " dark")}>G</p>
        <p className={"con-title" + (lightTheme ? "" : " dark")}>Test Groups</p>
      </motion.div>
      <motion.div whileHover={{scale: 1.01}} 
      whileTap={{scale: 0.99}} className={"list-tem" + (lightTheme ? "" : " dark")}>
        <p className={"con-icon" + (lightTheme ? "" : " dark")}>G</p>
        <p className={"con-title" + (lightTheme ? "" : " dark")}>Test Groups</p>
      </motion.div>
      <motion.div whileHover={{scale: 1.01}} 
      whileTap={{scale: 0.99}} className={"list-tem" + (lightTheme ? "" : " dark")}>
        <p className={"con-icon" + (lightTheme ? "" : " dark")}>G</p>
        <p className={"con-title" + (lightTheme ? "" : " dark")}>Test Groups</p>
      </motion.div>
      <motion.div whileHover={{scale: 1.01}} 
      whileTap={{scale: 0.99}} className={"list-tem" + (lightTheme ? "" : " dark")}>
        <p className={"con-icon" + (lightTheme ? "" : " dark")}>G</p>
        <p className={"con-title" + (lightTheme ? "" : " dark")}>Test Groups</p>
      </motion.div>
    </div>
  </motion.div>
  </AnimatePresence>
  )
}

export default Groups
