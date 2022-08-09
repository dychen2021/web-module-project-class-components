import React from 'react'
import TodoList from './TodoList'
import TodoForm from './Form'


export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todo: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  handleAdd = (task) =>{
    const newTask = {
      name: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todo, newTask]
    })
  }

  handleClear = () =>{
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    })
  }

  handleToggle = (clickedId) =>{

    this.setState({
      ...this.state,
      todos: this.state.todo.map( todo => {
        if(todo.id === clickedId){
          return({
            ...todo,
            completed: !todo.completed
          })
        }
        return todo;
      })
    })
  }

  render() {
    const {todos} = this.state;

    return (
      <div>
        <h1>Todo App</h1>

        <TodoList handleToggle={this.handleToggle} todos={todos}/>
        <TodoForm handleAdd={this.handleAdd}/>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
