import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

function CalendarWithTodayDate() {
    const [date, setDate] = useState(new Date());

    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className='calender_calender'>
            <h2>Today's Date</h2>
            <p>{formattedDate}</p>
            <div className='box'>
            {/* <Calendar
                onChange={setDate}
                value={date}
                calendarType="US"
            />  */}
            </div>
           
        </div>
    );
}

export default CalendarWithTodayDate;
