import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css';

const todos = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }
  render() {
    return (
      <div className="App">
        <TodoList
          todos = {this.state.todos}
        />
        <TodoForm />
      </div>
    );
  }
}

export default App;