import { useState } from 'react'
import './Alldepartments.css'
import SemesterModule from '../../../SemesterModuleVeiwer/SemesterModule';
export default function Alldepartments(){

    const [department,set_department]=useState('none');
    
    if(department=='none'){
        return(
            <div className='departments_selecting_container'>
              <div className='department_selector' onClick={()=>set_department('computer')}>Computer Engineering</div>
              <div className='department_selector' onClick={()=>set_department('electrical')}>Electrical and Information</div>
              <div className='department_selector' onClick={()=>set_department('mechanical')}>Mechanical </div>
              <div className='department_selector' onClick={()=>set_department('civil')}>Civil and Environmental</div>
            </div>
        )
    }
    else if(department=='computer'){
        return(
            <SemesterModule set_department={set_department} department={department}/>
        )
    }else if(department=='electrical'){
        return(
            <SemesterModule set_department={set_department} department={department}/>
        )
    }
    else if(department=='mechanical'){
        return(
            <SemesterModule set_department={set_department} department={department}/>
        )
    }
    else if(department=='civil'){
        return(
            <SemesterModule set_department={set_department} department={department}/>
        )
    }
   
}