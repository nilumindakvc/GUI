
import { useState } from 'react'
import './DeleteStudent.css'
import { deleteStudent } from '../../studentService';
export default function DeleteStudent(){

    const [registration_number,set_registration_number]=useState('');
    const [status,set_status]=useState('status');


    function inputrest(){
        set_registration_number('');
    }

    async function handleSubmit(){
        try{
            set_status('processing!');
            await deleteStudent(registration_number);
            console.log(`Student with registration number ${registration_number} was deleted from the database!`);
            set_status('deleted');
            inputrest();
        }catch(error){
            console.error('Error deleting student:', error);
        }
        
    }


    return(
        <div className="student_deleting_conatainer">
        <div className="title">Delete student</div>
        <div className='student_deleting_inputs'>

            <div className='labels_inputs_container'>
                <div className='labels_conatiner' >
                <label>Registration Number:</label>
                <label >status</label>  
                </div>

                <div className='inputs_container' >
                <input type='text' className='st_details_inputs' value={registration_number} onChange={(e)=>set_registration_number(e.target.value)} 
                onClick={()=>set_status('status')}></input>
                
                <label >{status}</label> 
                </div>
             </div>   

             <div className='button_section'>
                <button onClick={()=>inputrest()}>Reset</button>
                <button onClick={()=>handleSubmit()}>Delete</button>
             </div>
          
            
        </div>
        </div>
    )
}