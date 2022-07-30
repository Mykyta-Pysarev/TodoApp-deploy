import React, { FC, useState, useEffect } from "react";
import "./styles.scss";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import AddModal from "./components/Modal";


const App: FC = () => {
  
  // const [todos, setTodos] = useState<Itodos[]>([]);
  // const [status, setStatus] = useState<string>("all");
  // const [filterTodos, setFilterTodos] = useState<Itodos[]>([]);
  // const [counterAdd, setCounterAdd] = useState<number>(0);
  const [counterEdit, setCounterEdit] = useState<number>(0);
  const [counterDelete, setCounterDelete] = useState<number>(0);

  // useEffect(():void => {
  //   getLocalTodos();
  // }, []);

  // useEffect(():void => {
  //   filterHandler();
  //   saveLocalTodos();
  // }, [Atodos, status]);

  // const filterHandler = ():void => {
    // switch (status) {
    //   case "completed":
    //     setFilterTodos(Atodos.filter((todo:Itodos) => todo['completed'] === true));
    //     break;
    //   case "uncompleted":
    //     setFilterTodos(Atodos.filter((todo:Itodos) => todo['completed'] === false));
    //     break;
    //   default:
    //     setFilterTodos(Atodos);
    //     break;
    // }
  // };

  // const saveLocalTodos = ():void => {
  //   localStorage.setItem("todos", JSON.stringify(Atodos));
  // };

  return (
    <div>
      <header>
        <h1>To do list</h1>
      </header>
      <AddModal />
      <Form
        counterEdit={counterEdit}
        counterDelete={counterDelete}
        setCounterDelete={setCounterDelete}
      />
      <TodoList 
      counterEdit={counterEdit}
      setCounterEdit={setCounterEdit}
      counterDelete={counterDelete}
      setCounterDelete={setCounterDelete}
      />
    </div>
  );
}

export default App;
