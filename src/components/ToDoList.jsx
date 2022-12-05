import React, { Component } from 'react';
import ToDoListEnter from './ToDoListEnter';
import ToDoListTasks from './ToDoListTasks';
import DateHead from './DateHead';

class ToDoList extends Component {
    state = {
        tasks: []
    }

    getTasks = () => {
        const tasksArray = JSON.parse(localStorage.getItem('toDoList'));
        if (!tasksArray) {
            return null;
        }
        this.setState({
            tasks: tasksArray
        });
    }

    deleteTask = (index) => {
        let tasksArray = JSON.parse(localStorage.getItem('toDoList'));
        if (!tasksArray) {
            return null;
        }
        tasksArray = tasksArray.slice(0, index).concat(tasksArray.slice(index + 1));
        localStorage.setItem('toDoList', JSON.stringify(tasksArray));
        this.setState({
            tasks: tasksArray
        });
    }

    componentDidMount() {
        this.getTasks();
    }

    render() {
        return (
            <section className='to-do-list'>
                <DateHead />
                <div className='to-do-list__container'>
                    <ToDoListEnter getTasks={this.getTasks} />
                    <ToDoListTasks deleteTask={this.deleteTask} tasks={this.state.tasks} />
                </div>
            </section>
        );
    }
}

export default ToDoList;