import React, { useState } from "react";
import fetchData from "../FetchData";
import { FormButton, FormDiv } from "./Forms.style";

const Form = ({
  todos,
  setTodos,
  setStatus,
  setCounterAdd,
  counterAdd,
  counterEdit,
  counterDelete,
  setCounterDelete,
}) => {
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const getRandomIntInclusive = () => {
    return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    const date = new Date();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
        // createdAt: `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
        createdAt: date,
        background: `rgb(${getRandomIntInclusive()}, ${getRandomIntInclusive()}, ${getRandomIntInclusive()})`,
      },
    ]);
    setInputText("");
    setCounterAdd(counterAdd + 1);
  };

  const importTodos = async () => {
    const result = await fetchData();
    setTodos([...todos, ...result]);
    setCounterAdd(counterAdd + result.length);
  };

  const deleteAll = (e) => {
    e.preventDefault();
    setCounterDelete(counterDelete + todos.length);
    setTodos([]);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <div className="counters">
        <div>
          <i className="fas fa-plus-square"></i> {counterAdd + "\u00a0\u00a0"}
        </div>
        <div>
          <i className="fas fa-solid fa-pen"></i> {counterEdit + "\u00a0\u00a0"}
        </div>
        <div>
          <i className="fas fa-trash"></i> {counterDelete + "\u00a0\u00a0"}
        </div>
        <div>
          <FormButton importButton onClick={importTodos}>
            <i className="fas fa-solid fa-file-medical"></i>
          </FormButton>
          {"\u00a0\u00a0"}
        </div>
        <div>
          <FormButton deleteAll onClick={deleteAll}>
            <i className="fas fa-trash"></i>
          </FormButton>
        </div>
      </div>
      <form className="first-input">
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <FormButton onClick={submitTodoHandler} type="submit">
          <i className="fas fa-plus-square"></i>
        </FormButton>
        <FormDiv>
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </FormDiv>
      </form>
    </>
  );
};

export default Form;
