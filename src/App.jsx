import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GuestPage from './GuestLogin/GuestPage'
import Adminpage from './Admin/Adminpage'


function App() {
  return(
    <Router>
      <div>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="/login" Component={Login}/>
        <Route path="/guest" Component={GuestPage}/>
        <Route path="/admin" Component={Adminpage}/>
        
      </Routes>
      </div>
    </Router>
  )
}
export default App
