import { useState } from 'react'
import { updateStudent } from '../../studentService'
import './UpdateStudent.css'
export default function UpdateStudent(){

    const [up_student_name,set_up_student_name]=useState('');
    const [up_student_mail,set_up_student_mail]=useState('');
    const [st_reg_num,set_st_reg_num]=useState('');
    const [up_ac_duration,set_up_ac_duration]=useState('');
    const [status,set_status]=useState('status');

    async function handleupdate(){
       try{
        set_status('processing!')
        const student={
            student_name:up_student_name,
            academic_duration:up_ac_duration,
            studentmail:up_student_mail
        }
       
        await updateStudent(st_reg_num,student);
        console.log(`Student with registration number ${st_reg_num} was updated in the database!`);
        set_status('updated');
        resetinputs();
       }catch(error){
        console.error('Error updating student:', error);
       }
       }

       function resetinputs(){
          set_up_student_name('');
          set_up_student_mail('');
          set_st_reg_num('');
          set_up_ac_duration('');
       }

    return(
        <div className="student_updating_conatainer">
        <div className="title">Upadate student</div>
        <div className='student_updating_inputs'>

            <div className='labels_inputs_container'>
                <div className='labels_conatiner'>

                <label>Registration number:</label>  
                <label>Student New Name:</label>  
                <label>Student New Email:</label>  
                <label> New Acadamic Duration:</label>
                <label></label>  
                <label>status</label> 

                </div>

                <div className='inputs_container'>
                <input type='text' className='st_details_inputs' value={st_reg_num} onChange={(e)=>set_st_reg_num(e.target.value)} onClick={()=>set_status('status')}></input>    
                <input type='text' className='st_details_inputs' value={up_student_name} onChange={(e)=>set_up_student_name(e.target.value)}></input>
                <input type='text' className='st_details_inputs' value={up_student_mail} onChange={(e)=>set_up_student_mail(e.target.value)} ></input>
                <input type='text' className='st_details_inputs' value={up_ac_duration} onChange={(e)=>set_up_ac_duration(e.target.value)}></input>
                <label></label>  
                <label>{status}</label> 
                </div>
             </div>   

             <div className='button_section'>
                <button onClick={()=>resetinputs()}>Reset</button>
                <button onClick={()=>handleupdate()}>Update</button>
             </div>
          
            
        </div>
        </div>
    )
}