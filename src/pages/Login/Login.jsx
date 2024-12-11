import './Login.css'

export default function Login(){
    return(
        <div className="maincontainer">
            <div className="header">
                <div className='nav_left'>
                <ul>
                    <li>Student</li>
                    <li>Teacher</li>
                </ul>
                </div>
              
            </div>
            <div className="login_window">
            <div className='login_title'>
               <div className='login_title_inside'>
              <p style={{fontFamily:'sans-serif',fontSize:'15px'}}> Student Management System</p>
                Student Login
               </div>
            </div>
            <div className='login_inputs'>
                
                <input type='text' placeholder='username'/>
                <input type='password' placeholder='password' />
            </div>
            <div className='login_buttons'>
               <button className='button'>Login</button>
            </div>
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