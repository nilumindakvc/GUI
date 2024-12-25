import { useState } from 'react'
import './Adminlogincard.css'
import { Link } from 'react-router-dom'

export default function Adminlogincard(){

  
  const [admin_password,set_admin_password]=useState();

    return(
        <div className="login_window">
        <div className='login_title'>
           <div className='login_title_inside'>
          <p style={{fontFamily:'sans-serif',fontSize:'15px'}}> Student Management System</p>
            Admin Login
           </div>
        </div>
        <div className='login_inputs'>
            
            <input type='password' placeholder='password' value={admin_password} onChange={(e)=>set_admin_password(e.target.value)}/>
        </div>
        <div className='login_buttons'>
          { 
             
             <Link to={admin_password=='6230989$Aab'?"/admin":"/login"}>
             <button className='button'> Login</button>
            </Link>
          }
       
        </div>
        </div>
    )
}