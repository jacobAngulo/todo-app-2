import React from 'react';
import Todo from './Todo'

function TodoList(props) {
    return (
        <ul>
            {props.todos.map((todo) => {
                return (
                    <Todo
                        todo = {todo}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList