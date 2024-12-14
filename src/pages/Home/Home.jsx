

import { useState } from "react"
import GuestPage from "../../GuestLogin/GuestPage.jsx"
import Nav from "../../Nav/Nav.jsx"
import SemesterModule from "../../SemesterModuleVeiwer/SemesterModule.jsx"
import Dashboard from "./Dashboard/Dashboard.jsx"
import "./Home.css"





export default function Home(){
    const [navigating_state,set_navigating_state]=useState('home');

    if(navigating_state=='home'){
        return(
            <div className="tempory_container_home_self">
                <div className="maincontainer_home_self">
                 <div className="container_home_self_left">
                    <button className="homepage_btn" onClick={()=>set_navigating_state('dashboard')}>Dash Board</button>
                    <button className="homepage_btn" onClick={()=>set_navigating_state('cources')}>Courses</button>
                    <button className="homepage_btn">Announcement</button>
                    <button className="homepage_btn">Upcomming Event</button>

                 </div>
                 <div className="container_home_self_right"></div>
                </div>
            
            </div>)
    }else if(navigating_state=='dashboard')
    {
        return(
            <div className="container_home">
                <Nav navigating_state={navigating_state} set_navigating_state={set_navigating_state} />
                <Dashboard/>   
            </div>)
    }
    else if(navigating_state=='cources')
    {
        return(
            <div className="container_home">
                <Nav navigating_state={navigating_state} set_navigating_state={set_navigating_state} />
                <SemesterModule/> 
            </div>)
    }
   
}

