import React, { Component } from 'react';

class ToDoListItem extends Component {

    state = {
        clicked: false,
        taskTimeOut: null
    }

    clickHandler = () => {
        if (this.state.clicked === false) {

            const timeOut = setTimeout(() => {
                this.props.deleteTask(this.props.id);
                this.setState({
                    clicked: false,
                    taskTimeOut: null
                })
            }, 3000);

            this.setState({
                clicked: true,
                taskTimeOut: timeOut
            })
        } else {
           clearTimeout(this.state.taskTimeOut);
            this.setState({
                clicked: false,
                taskTimeOut: null
            })
        }

    }

    render() {
        const classNameValue = this.state.clicked ? 'to-do-list__task-item crossed-out' : 'to-do-list__task-item';
        return <li className={classNameValue} onClick={this.clickHandler}>{this.props.id+1}. {this.props.text}</li>;
    }
}

export default ToDoListItem;