export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const DELETE_COMPLETED_TODOS = "DELETE_COMPLETED_TODOS";
export const TOGGLE_TODO_COMPLETEDNESS = "TOGGLE_TODO_COMPLETEDNESS";

export const addTodo = task => {
  return {
    type: ADD_TODO,
    payload: {
      task: task
    }
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: {
      id: id
    }
  };
};

export const deleteCompletedTodos = () => {
  return {
    type: DELETE_COMPLETED_TODOS
  };
};

export const toggleTodoCompletedness = id => {
  return {
    type: TOGGLE_TODO_COMPLETEDNESS,
    payload: {
      id: id
    }
  };
};
