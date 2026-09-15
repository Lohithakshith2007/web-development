import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Practice JavaScript", completed: true },
  ]);

  const [task, setTask] = useState("");

  function AddTask() {
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTask("");
  }

  function DeleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((Todo) => Todo.id !== id));
  }

  function Toggle(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  return (
    <>
      {todos.map((todo) => (
        <div style={{ display: "inline" }} key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => Toggle(todo.id)}
          />
          <label>{todo.text}</label>
          <button onClick={() => DeleteTodo(todo.id)}>delete </button>
          <br />
        </div>
      ))}

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={AddTask}>add</button>
    </>
  );
}

export default TodoApp;
