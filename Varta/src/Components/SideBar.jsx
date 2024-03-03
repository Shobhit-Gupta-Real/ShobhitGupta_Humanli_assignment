import React, { useState } from 'react'
import "./CompoStyles.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Icon, IconButton, useScrollTrigger } from '@mui/material';
import ConversationItem from './ConversationItem';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../Features/ThemeSlice';
import {FirebaseAuth} from '../Context/Firebase'
import {signOut} from "firebase/auth"
import Search from './Search';

function SideBar() {
  const [conversation, setConversation] = useState(
    [
      {
        name:"Test#1",
        lastMessage: "Last Message #1",
        timeStamp: "today"
      },
      {
        name:"Test#2",
        lastMessage: "Last Message #2",
        timeStamp: "today"
      },
      {
        name:"Test#3",
        lastMessage: "Last Message #3",
        timeStamp: "today"
      },
    ]
  )
  const lightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = FirebaseAuth?.currentUser?.displayName
  return (
    <div className='sidebar_container'>
      <div className={"sb-header" + (lightTheme ? "" : " dark")}>
      <IconButton>
      <AccountCircleIcon className={"icon" + (lightTheme ? "" : " dark")}/>
      </IconButton>
      <div className="sb-header-2">
      <IconButton onClick={()=>navigate('users')}>
        <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")}/>
      </IconButton>
      <IconButton onClick={()=>{navigate('groups')}}>
      <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")}/>
      </IconButton>
      <IconButton onClick={()=>{navigate('create-groups')}}>
      <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")}/>
      </IconButton>
      <IconButton onClick={() => {
             dispatch(toggleTheme());
            }}>
      {lightTheme && (<NightlightIcon className={"icon" + (lightTheme ? "" : " dark")}/>)}       
      {!lightTheme && (<LightModeIcon className={"icon" + (lightTheme ? "" : " dark")}/>)}       
      </IconButton>
      <IconButton onClick={async()=>{
         await signOut(FirebaseAuth)
         sessionStorage.removeItem('user-cred')
         alert('Signed Out!')
         navigate('/')
      }}>
        //random
        <ExitToAppIcon/>
      </IconButton>
      </div>
      </div>
      <Search/>
      <div className={"sb-conversation" + (lightTheme ? "" : " dark")}>
        {conversation.map((convo)=>{
          return <ConversationItem props={convo} key={convo.name} />
        })}
      </div>
    </div>
  )
}

export default SideBar
