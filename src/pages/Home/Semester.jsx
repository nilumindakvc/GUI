import './Semester.css'
export default function Semester({bgcolour,title}){
   return(
    <div className="semester" style={{background:bgcolour}}>
     <div>
        <p style={{fontSize:'16px',color:'white'}}>{title}</p>
     </div>
    </div>
   )
}