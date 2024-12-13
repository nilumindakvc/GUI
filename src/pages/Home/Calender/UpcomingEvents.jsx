import './UpcomingEvents.css'
import Event from './Event'
export default function UpcomingEvents(){
    return(
        <div className="container_upcoming">
            <div className='container_upcoming_top'>Upcoming Events</div>
            <div className='container_upcoming_bottom'>
                <Event eventname={'HAXTREEME 1.0'} date={'2025-01-10'} time={'9.00am onwards'} venue={'NCC'}/>
                <Event/>
                <Event/>
            </div>

        </div>
    )
}