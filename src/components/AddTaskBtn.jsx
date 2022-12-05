import React, {Component} from 'react';

class AddTaskBtn extends Component {
    clickHandler = () => {
        this.props.addTaskHandler(this.props.newItem);
        this.props.taskValueChange('');
        this.props.getTasks();
    }
    render() {
        return (
            <button className='to-do-list__btn' onClick={this.clickHandler}>+</button>
        );
    }
}

export default AddTaskBtn;