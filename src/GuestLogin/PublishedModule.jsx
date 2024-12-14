import Card from '../Recently visted/Recent Card/Card'
import './PublishedModule.css'
export default function PublishedModule(){
    return(
        <div className="maincontainer_publishedmodule">
        <div className='maincontainer_publishedmodule_top'>
            <p>Published Modules</p>
        </div>
        <div className='maincontainer_publishedmodule_bottom'>
                     <Card  description={'GUI Programming'} />
                     <Card  description={'DSA'}/>
                     
        </div>
        </div>
    )
}