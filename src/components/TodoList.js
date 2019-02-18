import React from 'react';
import Todo from './Todo'

function TodoList(props) {
    const sortedList = props.todos.sort((a, b) => a.completed - b.completed);
    return (
        <ul>
            {sortedList.map(todo => {
                return (
                    <Todo
                        toggleCompleted = {props.toggleCompleted}
                        todo = {todo}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList