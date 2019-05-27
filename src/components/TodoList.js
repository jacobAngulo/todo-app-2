import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

const TodoList = ({ todos }) => {
  const sortedList = todos.sort((a, b) => a.completed - b.completed);
  return (
    <ul>
      {sortedList.map(todo => {
        return <Todo todo={todo} />;
      })}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  null
)(TodoList);
