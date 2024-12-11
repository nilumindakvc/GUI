import Announcement from "../../Announcement/Announcement.jsx"
import Nav from "../../Nav/Nav.jsx"
import Recent from "../../Recently visted/Recent.jsx"
import CalendarWithTodayDate from "./Calender/CalendarWithTodayDate.jsx"
import "./Home.css"
import Modulebox from "./Module/Modulebox.jsx"
import Modulecard from "./Module/Modulecard.jsx"


import Semesters from "./Semesters.jsx"




export default function Home(){
    return(
        <div className="container_home">
            <Nav/>
{/*---------------------------------------------------------------------------------------------------                     
            <div className="context_container">
            
            <div className="annoc_recentevent_container">                  
            <Announcement announce={'No any specific announcement!'}/>
            <Recent/>
            </div>

            <div className="calander_container">
            <div className="calander_container_top">Calander</div>
            <div className="calander_container_bottom">
                <CalendarWithTodayDate/>
            </div>

           </div> 
           
           </div>  -----------------------------------------------------------------------------------------------*/}
           <Semesters/>
           <div className="modulebox_and_modulecard">
           <Modulebox/>
           <Modulecard modulename={'GUI programming'} code={'CE20240'} lecture={'Awanthi Jajasundara'} credit={'3credits'} gpa={'GPA'}/>
           </div>
           
           
          
        </div>
      
       
    )
}

