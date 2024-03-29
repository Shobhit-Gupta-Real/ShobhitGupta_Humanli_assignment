import { IconButton } from '@mui/material'
import React from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';

function CreateGroups() {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <AnimatePresence>
    <motion.div 
    initial={{opacity:0, scale:0}}
    animate={{opacity:1, scale: 1}}
    exit={{opacity:0, scale: 0}}
    transition={{
      ease: "anticipate",
      duration: "0.2"
    }} className={"createGroups-container" + (lightTheme ? "" : " dark")}>
       <input type="text" placeholder='Enter Group Name' className={"search-box" + (lightTheme ? "" : " dark")}/>
       <IconButton>
        <DoneOutlineIcon className={"icon" + (lightTheme ? "" : " dark")}/>
       </IconButton>
    </motion.div>
    </AnimatePresence>
  )
}

export default CreateGroups
