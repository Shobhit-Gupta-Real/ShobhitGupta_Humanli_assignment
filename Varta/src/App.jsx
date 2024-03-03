import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContainer from './Components/MainContainer'
import Login from './Components/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import Welcome from './Components/Welcome'
import ChatArea from './Components/ChatArea'
import User_Groups from './Components/User_Groups'
import CreateGroups from './Components/CreateGroups'
import Groups from './Components/Groups'
import { useAuth } from './Context/AuthContext'
function App() {
  const [count, setCount] = useState(0)
  const {currentUser} = useAuth()
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/" />;
    }

    return children
  };
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='varta' element={
        <ProtectedRoute>
        <MainContainer/>
        </ProtectedRoute>}>
          <Route path='welcome' element={<Welcome/>}/>
          <Route path='chat' element={<ChatArea/>}/>
          <Route path='users' element={<User_Groups/>}/>
          <Route path='groups' element={<Groups/>}/>
          <Route path='create-groups' element={<CreateGroups/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
