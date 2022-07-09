import React from "react";
import { FormButton, FormDiv } from "./Forms.style";


const Form = ({ setInputText, todos, setTodos, inputText, setStatus, setCounterAdd, counterAdd, counterEdit, counterDelete}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }
  
  function getRandomIntInclusive() {
    return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    const date = new Date();
    setTodos([
      ...todos,
      { text: inputText,
        completed: false,
        edit: false,
        id: Math.random() * 1000,
        // createdAt: `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
        createdAt: date,
        background:`rgb(${getRandomIntInclusive()}, ${getRandomIntInclusive()}, ${getRandomIntInclusive()})`,
      }
    ]);
    setInputText('');
    setCounterAdd(counterAdd + 1);
  }

  const statusHandler = (e) => {
    setStatus(e.target.value);

  }

  return (
    <>
      <div className="counters">
        <div><i className="fas fa-plus-square"></i> {counterAdd + "\u00a0\u00a0"}</div>
        <div><i className="fas fa-solid fa-pen"></i> {counterEdit + "\u00a0\u00a0"}</div>
        <div><i className="fas fa-trash"></i> {counterDelete + "\u00a0\u00a0"}</div>
      </div>
      <form className="first-input">
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
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
}

export default Form;