import CreateAnnouncement from './CreateAnnouncement'
import CreateModule from './CreateModule'
import PublishedModule from './PublishedModule'
import './GuestPage.css'
import Guestcalendar from './Guestcalendar'
import StudentEntrolment from './StudentEntrolment'

export default function GuestPage(){
    return(
        <div className='maincontainer_guestpage'>
            <div className='guest_vertical_container'>
                <CreateAnnouncement/>
                <StudentEntrolment/>
                </div>
            <div className='guest_vertical_container' style={{width:'22.5%'}}><CreateModule/></div>
            <div className='guest_vertical_container' style={{width:'27.5%'}}><PublishedModule/></div>
            <div className='guest_vertical_container'><Guestcalendar/></div>
        
        
        
      
       
        </div>
    )
}