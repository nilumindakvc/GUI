import { Link } from "react-router-dom"
import "./Nav.css"

  function Navbar({navigating_state,set_navigating_state}){
   
    return(
        <div className="main_container_nav">
           

            <div className="leftside">
             <ul>
                <li onClick={()=>set_navigating_state('home')}>Home</li>
                <li onClick={()=>set_navigating_state('dashboard')}>Dash Board</li>
                <li onClick={()=>set_navigating_state('cources')}>Cources</li>
             </ul>
            </div>

            <Link to="/login">
            <div className="rightside">
             <ul>
                <li>log out</li>
             </ul>
            </div>
            </Link>

            </div>
           
        
    )
}

export default Navbar