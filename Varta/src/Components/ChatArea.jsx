import React, { useState } from "react";
import "./CompoStyles.css"
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "../Context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { FireStore } from "../Context/Firebase";


function ChatArea(){
  const {currentUser} = useAuth()
  const [conversation, setConversation] = useState({
    name:"Test#1",
    lastMessage: "Last Message #1",
    timeStamp: "today"
  },)
  var props = conversation;
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(FireStore, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);
    return (
    <AnimatePresence>
    <motion.div 
    initial={{opacity:0, scale:0}}
    animate={{opacity:1, scale: 1}}
    exit={{opacity:0, scale: 0}}
    transition={{
      ease: "anticipate",
      duration: "0.2"
    }} className="chatArea-container">
        <div className="chatArea-header">
          <p className="con-icon">{props.name[0]}</p>
          <div className="header-text">
            <p className="con-title">{props.name}</p>
            <p className="con-timeStamp">{props.timeStamp}</p>
          </div>
          <IconButton>
            <DeleteIcon/>
          </IconButton>
        </div>
        <div className="messages-container">
          <MessageOthers/>
          <MessageSelf/>
          <MessageOthers/>
          <MessageSelf/>
          <MessageOthers/>
          <MessageSelf/>
          <MessageOthers/>
          <MessageSelf/>
          <MessageOthers/>
          <MessageSelf/>
        </div>
        <div className="text-input-area">
          <input type="text" placeholder="Type a Message" className="search-box"/>
          <IconButton>
            <SendIcon/>
          </IconButton>
        </div>
    </motion.div>
    </AnimatePresence>
    )
}
export default ChatArea