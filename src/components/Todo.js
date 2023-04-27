import React, { useState } from 'react';

const Todo = ({ todo, deleteTodo, updateTodo }) => {
    const [Edit, setEdit] = useState(false);
    const [title, setTitle] = useState(todo.title);

    const updateTodoHandler = (e) => {

        // console.log('hit here');
        e.preventDefault();
        let updatetoDo = {
            id: todo.id,
            title,
            complete: todo.complete
        }
        updateTodo(updatetoDo);
        setEdit(false);
    }
    return (
        <li className="todo-item-container" >
            <div className="todo-item">
                <input type="checkbox" />
                {!Edit && <span onDoubleClick={() => setEdit(true)} className={`todo-item-label ${todo.complete ? "line-through" : ""}`}>
                    {todo.title}
                </span>
                }
                {Edit &&
                    <form onSubmit={updateTodoHandler}>
                        <input type="text" className="todo-item-input" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </form>
                }
            </div>
            <button className="x-button" onClick={() => deleteTodo(todo.id)}>
                <svg
                    className="x-button-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </li >

    );
}

export default Todo;
