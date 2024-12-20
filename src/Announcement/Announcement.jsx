
import './Announcement.css'

export default function Announcement({announce}){
    return(
        <div className="maincontainer_annoc" >
            
            <div className="con_top_annoc">
                Announcement
            </div>
            <div className="con_bottom_annoc">{announce}</div>

        </div>
    )
}