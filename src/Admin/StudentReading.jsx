import { useState } from 'react'
import { getStudentById } from '../../studentService'
import './StudentReading.css'
export default function StudentReading(){

    const[id,set_id]=useState('');
    const[student_details,set_student_details]=useState({student_name:'student_name',studentmail:'studentmail',academic_duration:'ac_duration',registration_number:'reg_num'});
    
    async function handleread() {
        try{
            const response= await getStudentById(id);
            set_student_details(response.data.student)
            console.log(`Details for student with id number ${id} retrieved!`);
            console.dir(response, { depth: null });
         } catch (error) {
            console.error('Error getting student details:', error); }
        }

        function reset(){
            set_student_details({student_name:'student_name',studentmail:'studentmail',academic_duration:'ac_duration',registration_number:'reg_num'});
        }
    
    return(
        <div className="student_reading_container">
        <div className="title">Student Details</div>
        <div className='student_reading_details'>

            <div className='labels_inputs_container'>
                <div className='labels_conatiner'>
                <label>Id:</label>
                <label>Registration Number:</label>
                <label>Student Name:</label>    
                <label>Student Email:</label>  
                <label>Acadamic duration:</label>  
                </div>

                <div className='details_container'>
                <input type='text' className='st_details_inputs' value={id} onChange={(e)=>set_id(e.target.value)}></input>
                <label>{student_details.registration_number}</label>
                <label>{student_details.student_name}</label>    
                <label>{student_details.studentmail}</label>  
                <label>{student_details.academic_duration}</label> 
                
                </div>
             </div>   

             <div className='button_section'>
                <button onClick={()=>reset()}>Reset</button>
                <button onClick={()=>handleread()}>Read</button>
             </div>
          
            
        </div>
        </div>
    )
}