import React, { useState, useEffect } from "react";
import "./components/styles.scss";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);
  const [counterAdd, setCounterAdd] = useState(0);
  const [counterEdit, setCounterEdit] = useState(0);
  const [counterDelete, setCounterDelete] = useState(0);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = async () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem([]);
    } else {
      const todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>To do list</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        counterAdd={counterAdd}
        setCounterAdd={setCounterAdd}
        counterEdit={counterEdit}
        counterDelete={counterDelete}
        setCounterDelete={setCounterDelete}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filterTodos={filterTodos}
        counterEdit={counterEdit}
        setCounterEdit={setCounterEdit}
        counterDelete={counterDelete}
        setCounterDelete={setCounterDelete}
      />
    </div>
  );
}

export default App;
