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

  addTask = (e, task) => {
    e.preventDefault();
    if(task !== '') {
      const newTask = {
        task: task,
        id: Date.now(),
        completed: false
      }
      this.setState({
        todos: [...this.state.todos, newTask]
      })   
    }
    console.log(this.state.todos)
  }

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    })
  }

  handleClearCompleted = (e) => {
    e.preventDefault()
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Todos</h1>
        </header>
        <section className='page'>
          {/* <div className='side-bar'></div> */}
          <div className='main-content'>
            <TodoList
              toggleCompleted = {this.toggleCompleted}
              todos = {this.state.todos}
            />
          <TodoForm
            addTask={this.addTask}
          />
          <button className='clear-btn' onClick={this.handleClearCompleted}>clear completed</button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;