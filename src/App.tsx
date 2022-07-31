import React, { FC } from "react";
import "./styles.scss";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import AddModal from "./components/Modal";

const App: FC = () => {

  return (
    <div>
      <header>
        <h1>To do list</h1>
      </header>
      <AddModal />
      <Form />
      <TodoList />
    </div>
  );
};

export default App;
