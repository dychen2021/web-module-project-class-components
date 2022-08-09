import React from 'react'

export default class Todo extends React.Component{

  handleUpdate = () =>{
    this.props.handleToggle(this.props.todo.id);
  }

  render() {
    return(<li onClick={handleUpdate}>{this.props.todo.task} {this.props.todo.completed == true?<span>-completed</span>:<span></span>}</li>);
  }
}
