import React from "react";
import { connect } from "react-redux";
import { toggleTodoCompletedness, deleteTodo } from "../actions";

const Todo = ({ todo, toggleTodoCompletedness, deleteTodo }) => {
  return (
    <li
      className={`todo${todo.completed ? " completed" : ""}`}
      onClick={() => toggleTodoCompletedness(todo.id)}
      key={todo.id}
    >
      <button className="delete-todo-btn" onClick={() => deleteTodo(todo.id)}>
        x
      </button>
      {todo.task}
    </li>
  );
};

export default connect(
  null,
  { toggleTodoCompletedness, deleteTodo }
)(Todo);
