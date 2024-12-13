import './GuestLoginCard.css'
export default function GuestLoginCard(){
    return(
        <div className="login_window">
        <div className='login_title'>
           <div className='login_title_inside'>
          <p style={{fontFamily:'sans-serif',fontSize:'15px'}}> Student Management System</p>
            Guest Login
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
    )
}