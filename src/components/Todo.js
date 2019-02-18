import React from 'react'

function Todo(props) {
    return (
        <li
        className={`todo${props.todo.completed ? ' completed' : ''}`}
        onClick={() => props.toggleCompleted(props.todo.id)}
        key={props.todo.id}
        >{props.todo.task}
        </li>
    )
}

export default Todo