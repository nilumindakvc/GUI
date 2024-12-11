import Card from './Recent Card/Card'
import './Recent.css'

export default function Recent(){
    return(
        <div className="maincontainer_recent">
        <div className="con_top_recent">Recent</div>
        <div className="con_bottom_recent">
            <Card  description={'GUI Programming'} />
            <Card  description={'Complex Analysis'}/>
            <Card  description={'DSA'}/>
            <Card  description={'GUI Programming'} />
            
            
        </div>
        </div>
    )
}