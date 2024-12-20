
import Semesters from '../pages/Home/Semesters'
import Modulebox from '../pages/Home/Module/Modulebox'
import Modulecard from '../pages/Home/Module/Modulecard'


import './SemesterModule.css'
import { useState } from 'react'
export default function SemesterModule({set_department,department}){
    
    const [current_semester,set_current_semester]=useState("sem_1")
    console.log(current_semester);

    return(
            <>
            <div className='back_button_container'>
            <button onClick={()=>set_department('none')} className='back_button'>⊲</button>
            </div>
          
           <Semesters set_current_semester={set_current_semester} />
           <div className="modulebox_and_modulecard">
           <Modulebox department={department} current_semester={current_semester}/>
           <Modulecard modulename={'GUI programming'} code={'CE20240'} lecture={'Awanthi Jajasundara'} credit={'3credits'} gpa={'GPA'}/>
           </div>
           </> 
    )
}