import Semester from './Semester'
import './Semesters.css'
export default function Semesters(){
    return(
        <div className="container_semesters">
        <div className="container_semesters_top">
         <Semester bgcolour={'gray'} title={'Sem 01'}/>
         <Semester bgcolour={'gray'} title={'Sem 02'}/>
         <Semester bgcolour={'gray'} title={'Sem 03'}/>
         <Semester bgcolour={'gray'} title={'Sem 03'}/>
        </div>
        <div className="container_semesters_lower">
         
         <Semester bgcolour={'greenyellow'} title={'Sem 04'}/>
         <Semester bgcolour={'greenyellow'} title={'Sem 05'}/>
         <Semester bgcolour={'greenyellow'} title={'Sem 06'} />
         <Semester bgcolour={'greenyellow'} title={'Sem 08'}/>
        </div>
       </div>
    )
}