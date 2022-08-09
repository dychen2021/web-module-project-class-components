import React from 'react'

export default class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      input: ""
    }
  }
  handleClick = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.input);
  }


  handleClick = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }

  render() {
    return (
      <form>
          <input onChange={this.handleChange}/>
          <button onClick={this.handleClick}>Add</button>
      </form>
    )
  }
}
