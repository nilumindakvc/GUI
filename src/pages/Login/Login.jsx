
import { useState } from 'react'
import GuestLoginCard from '../../GuestLogin/GuestLoginCard'
import StudentLoginCard from '../../Student/StudentLoginCard'
import './Login.css'
import Adminlogincard from '../../Admin/Adminlogincard';


export default function Login(){

    const [logger,setlogger]=useState('student');
    
    function Student(){
        setlogger('student');
    }
    function Guest(){
        setlogger('guest');
    }
    function Admin(){
        setlogger('admin');
    }

    let suitable_login_card;

    if(logger=='student'){
        suitable_login_card=<StudentLoginCard/>
    }else if(logger=='guest'){
        suitable_login_card=<GuestLoginCard/>
    }else if(logger=='admin'){
        suitable_login_card=<Adminlogincard/>
    }

    return(
        <div className="maincontainer">
            <div className="header">
                <div className='nav_left'>
                <ul>
                    <li onClick={Student}>Student</li>
                    <li onClick={Guest}>Guest</li>
                    <li onClick={Admin}>Admin</li>
                </ul>
                </div>
              
            </div>
            <div>
            { suitable_login_card }
            </div>
           
            
      
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