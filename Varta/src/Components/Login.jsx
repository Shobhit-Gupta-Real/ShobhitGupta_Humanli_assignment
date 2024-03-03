import React, { useEffect, useState } from 'react'
import logo from '/finaltitle.png'
import { Button, TextField } from '@mui/material'
import {FireStore, FirebaseAuth, useFirebase} from '../Context/Firebase'
import {onAuthStateChanged, signOut, updateProfile} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import {doc, setDoc} from "firebase/firestore"


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [user, setUser] = useState({})
  const firebase = useFirebase()
  useEffect(()=>{
    onAuthStateChanged(FirebaseAuth, (currentUser)=>{
      setUser(currentUser)
    })
  })
  const navigate = useNavigate()
  const logout = async()=>{
    await signOut(FirebaseAuth)
  }
  return (
    <div className='login-container'>
      <img src={logo} alt="" className='login-img'/>
      <div className="login-box">
        <p className='text-2xl font-bold'>Login/Signup To Your Account</p>
        <TextField id="filled-basic" label="Username *(Signing Up)" variant="filled"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}/>
        <TextField id="filled-basic" label="Email" variant="filled"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        <TextField
          id="filled-password-input" label="Password" type="password" autoComplete="current-password" variant="filled"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}/>
        <div className="auth-button flex gap-4">
        <Button variant="contained" onClick={async()=>{
          const data = await firebase.signinUser(email, password)
          // const snapshot = await firebase.getData('UsersAuthList/'+data.user.uid)
          // await updateProfile(data.user, {
          //   displayName: snapshot.val().username
          // })
          // console.log(data.user)
          // if(snapshot){
          // sessionStorage.setItem("username", snapshot.val().username)
          // }
          sessionStorage.setItem("user-cred", JSON.stringify(data?.user))
          alert('Signed In!')
          navigate('/varta/welcome')
          }} >Login</Button>
        <Button variant="contained" color="error" onClick={async()=>{
          const data = await firebase.signupUser(email, password)
          // await firebase.putData('UsersAuthList/'+data.user.uid, {
          //   username: username
          // })
          // sessionStorage.setItem("username", username)
          await updateProfile(data.user, {
            displayName: username
          })
          await setDoc(doc(FireStore, "users", data.user.uid),{
            uid: data.user.uid,
            username: username,
          })
          await setDoc(doc(FireStore, "userChats", {}))
          sessionStorage.setItem("user-cred", JSON.stringify(data?.user))
          alert('Signed Up!')
          navigate('/varta/welcome')
          }}>Signup</Button>
        </div>
      </div>
    </div>
  )
}

export default Login
