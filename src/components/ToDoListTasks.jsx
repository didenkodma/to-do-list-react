import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem";

class ToDoListTasks extends Component {

    render() {
        const listItems = this.props.tasks.map((task, id) => <ToDoListItem key={id} id={id} deleteTask={this.props.deleteTask} text={task}/>);
        return <ul className='to-do-list__task-list'>
            {listItems}
        </ul>
    }
}

export default ToDoListTasks;