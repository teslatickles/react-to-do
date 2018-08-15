import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Play fetch with the cat', isCompleted: true },
        { description: '3D Print a Darth Buddha', isCompleted: true },
        { description: 'Convert my node/js app to React gui/web-frontend', isCompleted: false }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) => 
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } />
          )}
        </ul>
      </div>
    );
  }
}

export default App;
