import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { connect } from "react-redux";
import { deleteCompletedTodos } from "./actions";
import "./App.css";

const Main = ({ deleteCompletedTodos }) => {
  return (
    <div className="App">
      <header>
        <h1>Todos</h1>
      </header>
      <section className="page">
        <div className="main-content">
          <TodoList />
          <TodoForm />
          <button className="clear-btn" onClick={deleteCompletedTodos}>
            Clear Completed
          </button>
        </div>
      </section>
    </div>
  );
};

export default connect(
  null,
  { deleteCompletedTodos }
)(Main);
