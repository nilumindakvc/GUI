import Module from './Module'
import './Modulebox.css'
export default function Modulebox(){
   return(
    <div className="container_modulebox">
     <Module modulename={'Complex Analysis and Mathamatical transfrom'} />
     <Module modulename={'Data Structures and Algorithems'}/>
     <Module modulename={'GUI Programming'}/>
     <Module modulename={'Analog Electronics'}/>
     <Module modulename={'Signal and System'}/>
     <Module modulename={'Socity and Engineers'}/>
     <Module modulename={'Management for Engineers'}/>
     <Module/>
     
    </div>
   )
}