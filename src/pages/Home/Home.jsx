

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
            <div className="container_home">
                <Nav navigating_state={navigating_state} set_navigating_state={set_navigating_state} />
                <Dashboard/>
            
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

