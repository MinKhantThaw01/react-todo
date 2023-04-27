import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {

    // const deletePost = (id) => {
    //     todos.filter(todo => todo.id !== id);
    // }

    return (

        <ul className="todo-list">
            {todos.map(todo => (
                <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} updateTodo={updateTodo} />
            ))}
        </ul>

    );
}

export default TodoList;
