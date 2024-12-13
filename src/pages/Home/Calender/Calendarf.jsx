import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';


export default function Calendarf(){
    const [date,setdate]=useState(new Date());

    const onchange=(date)=>{
        setdate(date);
    }
    return(
        <div>
           <Calendar onChange={onchange} value={date}/>
        </div>
    )
}