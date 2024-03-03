import { IconButton } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import "./CompoStyles.css"
import {
    collection,
    query,
    where,
    getDocs,
    setDoc,
    doc,
    updateDoc,
    serverTimestamp,
    getDoc,
} from "firebase/firestore";
import { FireStore } from '../Context/Firebase';
import { useAuth } from '../Context/AuthContext';


function Search() {
  const lightTheme = useSelector((state) => state.themeKey);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const {currentUser} = useAuth()
  const handleSearch = async () => {
    const q = query(
      collection(FireStore, "users"),
      where("username", "==", username)
    );
    try{
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });
      } catch (err) {
        setErr(true);
      }
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(FireStore, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(FireStore, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(FireStore, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(FireStore, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("")
  };
  return (
    <div className="search">
    <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton>
        <SearchIcon className={"icon" + (lightTheme ? "" : " dark")}/>
        </IconButton>
        <input type="text" placeholder='Search'
        onKeyDown={handleKey}
        onChange={e=>setUsername(e.target.value)} 
        value={username}
        className={"search-box" + (lightTheme ? "" : " dark")}/>
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="sb-conversation flex flex-row gap-2" onClick={handleSelect}>
          <p className={"con-icon"}>{user.username[0]}</p>
          <div className={'con-title'+ (lightTheme ? "" : "dark")}>
            {user.username}
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
