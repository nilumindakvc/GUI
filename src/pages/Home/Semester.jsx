import './Semester.css'
export default function Semester({bgcolour,title,set_current_semester,cur_sem}){
   return(
    <div className="semester" style={{background:bgcolour}} onClick={()=>set_current_semester(cur_sem)}>
     <div>
        <p style={{fontSize:'16px',color:'white'}}>{title}</p>
     </div>
    </div>
   )
}

