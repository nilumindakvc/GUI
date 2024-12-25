import { useState } from 'react'
import { addStudent } from '../../studentService.js'
import './AddStudent.css'
export default  function AddStudent(){

    const [st_name,set_st_name]=useState('');
    const [st_reg_num,set_st_reg_num]=useState('');
    const [st_mail,set_st_mail]=useState('');
    const [ac_duration,set_ac_duration]=useState('');
    const [status,set_status]=useState('status');

    function input_reset(){
        set_st_name('');
        set_st_reg_num('');
        set_st_mail('');
        set_ac_duration('');
        
        }

    async function handleSubmit() {
       try{
           set_status('processing!')
            const student={
            student_name:st_name,
            registration_number:st_reg_num,
            studentmail:st_mail,
            academic_duration:ac_duration

        };
         const response=await addStudent(student);
         console.log(`student of ${st_name} was added in to the database!`)
         set_status(`Added with id ${response.data.id}`);
         input_reset();
       }catch(error){
        console.error('Error adding student:', error);
       }
        
    }    

    return(
        <div className="student_adding_conatainer">
        <div className="title">Add student</div>
        <div className='student_adding_inputs'>

            <div className='labels_inputs_container'>
                <div className='labels_conatiner'>
                <label>Student Name:</label>  
                <label>Registration Number:</label>  
                <label>Student Email:</label>  
                <label>Acadamic duration:</label>  
                <label></label>
                <label>status:</label>
                </div>

                <div className='inputs_container'>
                <input type='text' className='st_details_inputs' value={st_name} onChange={(e)=>set_st_name(e.target.value)} onClick={()=>set_status('status')}></input>
                <input type='text' className='st_details_inputs' value={st_reg_num} onChange={(e)=>set_st_reg_num(e.target.value)}></input>
                <input type='text' className='st_details_inputs' value={st_mail} onChange={(e)=>set_st_mail(e.target.value)}></input>
                <input type='text' className='st_details_inputs' value={ac_duration} onChange={(e)=>set_ac_duration(e.target.value)}></input>
                <label></label>
                <label style={{color:'red',fontSize:'10px'}}>{status}</label>
                </div>
             </div>   

             <div className='button_section'>
                <button onClick={()=>input_reset()}>Reset</button>
                <button onClick={()=>handleSubmit()}>Add</button>
             </div>
          
            
        </div>
        </div>
    )
}