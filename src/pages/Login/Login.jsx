
import { useState } from 'react'
import GuestLoginCard from '../../GuestLogin/GuestLoginCard'
import StudentLoginCard from '../../Student/StudentLoginCard'
import './Login.css'


export default function Login(){

    const [logger,setlogger]=useState('student');
    
    function Student(){
        setlogger('student');
    }
    function Guest(){
        setlogger('guest');
    }

    return(
        <div className="maincontainer">
            <div className="header">
                <div className='nav_left'>
                <ul>
                    <li onClick={Student}>Student</li>
                    <li onClick={Guest}>Guest</li>
                </ul>
                </div>
              
            </div>
            {logger=='student'?<StudentLoginCard/>:<GuestLoginCard/>}
            
      
            <div className="footer">
                <div id='footer_para'>
                   
                    © 2024 Faculty of Engineering,University of Ruhuna. All rights reserved. 
                    By logging in, you agree to abide by our Student Code of Conduct and Data Privacy Policy.
                    For assistance, please contact our support team at support@foeuor.edu.
                   
                
                </div>
            
            </div>
        </div>
    )
}