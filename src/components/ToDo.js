import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
        <button onClick={ (delindex) => this.props.deleteTodo(delindex) }>x</button>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>
      </li>
    );
  }
}

export default ToDo;

