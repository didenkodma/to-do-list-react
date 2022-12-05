import React, { Component } from 'react';

class DateHead extends Component {
    state = {
        daysArr: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',],
        monthsArr: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }

    render() {
        const {daysArr, monthsArr} = this.state;
        const date = new Date();
        let weekDay = date.getDay();//0-6
        let day = date.getDate(); //1-31
        let months = date.getMonth(); // 0-11
        return <div className='to-do-list__date'>{daysArr[weekDay]}, {day} {monthsArr[months]}</div>
    }
}

export default DateHead;