import React, {Component} from 'react';

// function setToDoItem(item) {
//     const items = JSON.parse(localStorage.getItem('toDoList'));
//     const newItem = [item];
//     if(!items) {
//         if(newItem !== '') {
//             localStorage.setItem('toDoList', JSON.stringify(newItem));
//         }
//         return null;
//     } 
//     if (item !== '') {
//         const newItemsArray = [...items, ...newItem];
//         localStorage.setItem('toDoList', JSON.stringify(newItemsArray));
//     }
// }

class TaskInput extends Component {

    handleChange = (e) => {
        this.props.taskChangeHandler(e.target.value)

    }

    render() {
        return (
            <input className="to-do-list__enter" value={this.props.taskValue} onChange={this.handleChange} placeholder="Add new task"/>
        );
    }
}

export default TaskInput;