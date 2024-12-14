import './CreateAnnouncement.css'
export default function CreateAnnouncement(){
    return(
        <div className="maincontainer_create_announcement">
          <div className="guest_announcement_top">
            <p>Announcement</p>
          </div>
          <div className='guest_announcement_bottom'>
            <button className='annoc_botton'>Make announcement</button>
          </div>
        </div>
    )
}