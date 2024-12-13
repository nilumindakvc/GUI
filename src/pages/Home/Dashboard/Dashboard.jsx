import Announcement from "../../../Announcement/Announcement"
import Recent from "../../../Recently visted/Recent"
import UpcomingEvents from "../Calender/UpcomingEvents"
import CalendarWithTodayDate from "../Calender/CalendarWithTodayDate"
import './Dashboard.css'

export default function Dashboard(){
    return(
        <div className="context_container">
            
        <div className="annoc_recentevent_container">                  
        <Announcement announce={'No any specific announcement!'}/>
        <Recent/>
        </div>

        <div className="calander_container">
        <div className="calander_container_top">Calander</div>
        <div className="calander_container_bottom">
            <CalendarWithTodayDate/>
            <UpcomingEvents/>
        </div>

       </div> 
       
        </div>
    )
}