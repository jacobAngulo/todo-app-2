import {
  ADD_TODO,
  DELETE_TODO,
  DELETE_COMPLETED_TODOS,
  TOGGLE_TODO_COMPLETEDNESS
} from "../actions";

export const reducer = (
  state = JSON.parse(localStorage.getItem("state")) || {
    todos: [
      { id: 1, task: "make a todo app", completed: true },
      { id: 2, task: "build a portfolio", completed: true },
      { id: 3, task: "get hired", completed: false }
    ]
  },
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodoObj = {
        task: action.payload.task,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        todos: [...state.todos, newTodoObj]
      };
    case TOGGLE_TODO_COMPLETEDNESS:
      return {
        ...state,
        todos: state.todos.map(todoObj => {
          if (todoObj.id === action.payload.id) {
            return {
              ...todoObj,
              completed: !todoObj.completed
            };
          }
          return todoObj;
        })
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todoObj => todoObj.id !== action.payload.id)
      };
    case DELETE_COMPLETED_TODOS:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};
