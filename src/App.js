import { useEffect, useState, } from 'react';
import './App.css';
import CheckAllAndRemaining from './components/CheckAllAndRemaining';
import ClearCompletedBtn from './components/ClearCompletedBtn';
import TodoFilter from './components/TodoFilter';
import TodoForm from "./components/TodoForm.js";
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState([]);
  const [url, seturl] = useState("http://localhost:3003/todos");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(todos => setTodos(todos))
  }, [url])

  const addPost = (todo) => {

    console.log(todo)

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    }
    )

    setTodos(prevState => [...prevState, todo])
  }

  const deleteTodo = (Id) => {
    // client side

    setTodos(prevState => {
      return prevState.filter(todo => todo.id !== Id);
    });
    // server side
    fetch(`${url}/${Id}`, {
      method: "DELETE",
    })
  }


  let updateTodo = (todo) => {

    console.log(todo);
    // server

    fetch(`${url}/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    })

    // client side
    setTodos(prevState => {
      return prevState.map(t => {
        if (t.id === todo.id) {
          return todo;
        }

        return t;
      })
    })
  }
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>


        <TodoForm addPost={addPost} />
        <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        <CheckAllAndRemaining />


        <div className="other-buttons-container">
          <TodoFilter />
          <ClearCompletedBtn />
        </div>
      </div>
    </div>
  );
}

export default App;