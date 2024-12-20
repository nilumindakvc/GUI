import Semester from './Semester'
import './Semesters.css'
export default function Semesters({set_current_semester}){

    
    return(
        <div className="container_semesters">
        <div className="container_semesters_top">
         <Semester set_current_semester={set_current_semester}  cur_sem ={"sem_1"} bgcolour={'gray'} title={'Sem 01'}/>
         <Semester set_current_semester={set_current_semester}  cur_sem ={"sem_2"} bgcolour={'gray'} title={'Sem 02'}/>
         <Semester set_current_semester={set_current_semester}  cur_sem ={"sem_3"} bgcolour={'gray'} title={'Sem 03'}/>
         <Semester set_current_semester={set_current_semester}  cur_sem ={"sem_4"} bgcolour={'gray'} title={'Sem 04'}/>
        </div>
        <div className="container_semesters_lower">
         
         <Semester set_current_semester={set_current_semester}  cur_sem ={"sem_5"} bgcolour={'greenyellow'} title={'Sem 05'}/>
         <Semester set_current_semester={set_current_semester}  cur_sem ={"sem_6"} bgcolour={'greenyellow'} title={'Sem 06'}/>
         <Semester set_current_semester={set_current_semester}  cur_sem ={"sem_7"} bgcolour={'greenyellow'} title={'Sem 07'} />
         <Semester set_current_semester={set_current_semester}  cur_sem ={"sem_8"} bgcolour={'greenyellow'} title={'Sem 08'}/>
        </div>
       </div>
      
    )
}