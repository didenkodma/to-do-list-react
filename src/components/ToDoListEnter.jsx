import React, { Component } from 'react';
import TaskInput from './TaskInput';
import AddTaskBtn from './AddTaskBtn';

class ToDoListEnter extends Component {

    state = {
        inputTaskValue: ''
    }

    changeTaskValue = (newValue) => {
        this.setState({
            inputTaskValue: newValue
        })
    }

    setToDoItem = (item) => {
        const items = JSON.parse(localStorage.getItem('toDoList'));
        const newItem = [item];
        if(!items) {
            if(item) {
                localStorage.setItem('toDoList', JSON.stringify(newItem));
            }
            return null;
        } 
        if (item) {
            const newItemsArray = [...items, ...newItem];
            localStorage.setItem('toDoList', JSON.stringify(newItemsArray));
        }
    }

    render() {
        return (
            <>
                <TaskInput taskValue={this.state.inputTaskValue} taskChangeHandler={this.changeTaskValue} />
                <AddTaskBtn newItem={this.state.inputTaskValue} getTasks={this.props.getTasks} addTaskHandler={this.setToDoItem} taskValueChange={this.changeTaskValue} />
            </>
        );
    }
}

export default ToDoListEnter;