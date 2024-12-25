import { Link } from 'react-router-dom'
import './Adminpage.css'
import AddStudent from './AddStudent'
import styles from './AddStudent'
import DeleteStudent from './DeleteStudent'
import UpdateStudent from './UpdateStudent'
import StudentReading from './StudentReading'
import ReadAll from './ReadAll'
import { useState } from 'react'

export default function Adminpage(){

    const [operation,set_operation]=useState('add')

    function operation_window_provider(){
        
        if(operation=='add'){
           return <AddStudent/>
        }else if(operation=='delete'){
           return <DeleteStudent/>
        }else if(operation=='update'){
           return <UpdateStudent/>
        }else if(operation=='read'){
           return <StudentReading/>
        }
        else if(operation=='readall'){
            return <ReadAll/>
        }
    }

   

    return(
        <div className='admin_page_maincontainer'>
            <div className='admin_page_navigation'>
                <p style={{fontSize:'15px'}}>Admin Center</p>
                <Link to="/login">
                <button>log out</button>
                </Link>
            
            </div>
            <div className='admin_page_operationcenter'>
             <div className='operation_selection_center'>
                <div className='operation_card' onClick={()=>set_operation('add')} style={operation=='add'?{background:'lightgray'}:styles.operation_card}>Add Students</div>
                <div className='operation_card' onClick={()=>set_operation('update')} style={operation=='update'?{background:'lightgray'}:styles.operation_card}>Update Students</div>
                <div className='operation_card' onClick={()=>set_operation('read')} style={operation=='read'?{background:'lightgray'}:styles.operation_card}>Read Student</div>
                <div className='operation_card' onClick={()=>set_operation('readall')} style={operation=='readall'?{background:'lightgray'}:styles.operation_card}>Read All</div>
                <div className='operation_card' onClick={()=>set_operation('delete')} style={operation=='delete'?{background:'lightgray'}:styles.operation_card}>Delete Students</div>
             </div>
             <div className='operation_veiwing_center'>
               {operation_window_provider()}
             </div>
            </div>
            
        </div>
    )
}