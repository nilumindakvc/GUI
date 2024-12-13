
import Semesters from '../pages/Home/Semesters'
import Modulebox from '../pages/Home/Module/Modulebox'
import Modulecard from '../pages/Home/Module/Modulecard'

import './SemesterModule.css'
export default function SemesterModule(){
    return(
            <>
           <Semesters/>
           <div className="modulebox_and_modulecard">
           <Modulebox/>
           <Modulecard modulename={'GUI programming'} code={'CE20240'} lecture={'Awanthi Jajasundara'} credit={'3credits'} gpa={'GPA'}/>
           </div>
           </> 
    )
}