
import Nav from "../../Nav/Nav.jsx"
import SemesterModule from "../../SemesterModuleVeiwer/SemesterModule.jsx"
import Dashboard from "./Dashboard/Dashboard.jsx"
import "./Home.css"





export default function Home(){
    return(
        <div className="container_home">
            <Nav/>
            {/* <Dashboard/> */}
           
           <SemesterModule/>
           
          
        </div>
      
       
    )
}

