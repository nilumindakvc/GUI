
import { useState } from 'react'
import './ReadAll.css'
import { getStudents } from '../../studentService'


export default function ReadAll(){

    const[reading_password,set_reading_password]=useState('');
    const[allStudents,set_allStudents]=useState([]);
    const[data_ready,set_data_ready]=useState(false);

    async function  handleRead() {
        try{
            const response= await getStudents();
            console.log(response.data.students)
            set_allStudents(response.data.students);
            set_data_ready(true);
        }catch(error){
            console.log(error);
        }
    }

    return(
        <div className='read_all_conatainer'>
            <div className='title_read'>Read all</div>
            <div className='reading_container' >
                {data_ready==false?<p style={{color:'lightgray'}}>set the password and read data!</p>:allStudents.map(item=>
                  <div className='details_row'>
                   <div className='single_detail' style={{width:'10%'}}>{item.id}</div>
                   <div className='single_detail'>{item.student_name}</div>
                   <div className='single_detail'>{item.registration_number}</div>
                   <div className='single_detail' style={{width:'30%'}}>{item.studentmail}</div>
                   <div className='single_detail'>{item.academic_duration}</div>
                  </div>
                  )}
            </div>
            <div className='button_section_read'>
                <label>password:</label>
                <input type='password' value={reading_password} onChange={(e)=>set_reading_password(e.target.value)}></input>
                <button disabled={reading_password=='6230989$Aab'?false:true} onClick={()=>handleRead()}>Read</button>
            </div>

        </div>
    )
}