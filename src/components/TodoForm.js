import React, { useState } from "react";
import { addTodo } from "../actions";
import { connect } from "react-redux";

const TodoForm = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState("try me!");

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(todoInput);
    setTodoInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="input"
        value={todoInput}
        onChange={e => setTodoInput(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default connect(
  null,
  { addTodo }
)(TodoForm);
