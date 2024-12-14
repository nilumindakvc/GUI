import Calendar from "react-calendar";
import './Guestcalendar.css'
export default function Guestcalendar(){
    return(
        <div className="maincontainer_guest_calendar">
          <div className="guest_calendar_top">
            <p>Calendar</p>
          </div>
         <Calendar/>
         <div className="admin_center">

          <div className="admin_center_top">
          <p>Admin Center</p>
          </div>
          <div className="admin_center_bottom">
           
          </div>

         </div>
        </div>
    )
}