
import { useState } from 'react';

const TodoForm = ({ addPost }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let todo = {
            id: Math.random(),
            title,
            complete: false
        }

        addPost(todo);

        setTitle("");

    }

    return (

        <form action="#" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                placeholder="What do you need to do?"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
        </form>

    );
}

export default TodoForm;
