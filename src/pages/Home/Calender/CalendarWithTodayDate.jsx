import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css'; 
import Calendarf from './Calendarf';

function CalendarWithTodayDate() {
    
    return (
        <div className='calender_calender'>
            <Calendarf/>
        </div>
    );
}

export default CalendarWithTodayDate;
