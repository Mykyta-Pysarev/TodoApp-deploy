import React, { FC, useState, useEffect } from "react";
import "./styles.scss";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import {Itodos} from "./Interfaces"

const App: FC = () => {
  const [todos, setTodos] = useState<Itodos[]>([]);
  const [status, setStatus] = useState<string>("all");
  const [filterTodos, setFilterTodos] = useState<Itodos[]>([]);
  const [counterAdd, setCounterAdd] = useState<number>(0);
  const [counterEdit, setCounterEdit] = useState<number>(0);
  const [counterDelete, setCounterDelete] = useState<number>(0);

  useEffect(():void => {
    getLocalTodos();
  }, []);

  useEffect(():void => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = ():void => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo['completed'] === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo['completed'] === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  const saveLocalTodos = ():void => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = async ():Promise<void> => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos",JSON.stringify([]));
    } else {
      const todoLocal = JSON.parse(localStorage.getItem("todos")!);
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
