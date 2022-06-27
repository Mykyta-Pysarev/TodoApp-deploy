import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus, setCounterAdd, counterAdd, counterEdit, counterDelete, setCounterEdit, setCounterDelete }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, edit: false, id: Math.random() * 1000 }
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
        <div><i className="fas fa-plus-square"></i> {counterAdd + "\u00a0"}</div>
        <div><i className="fas fa-solid fa-pen"></i> {counterEdit + "\u00a0"}</div>
        <div><i className="fas fa-trash"></i> {counterDelete + "\u00a0"}</div>
      </div>
      <form className="first-input">
        <input value={inputText} onChange={inputTextHandler} type="text" classNameNameName="todo-input" />
        <button onClick={submitTodoHandler} classNameName="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </>
  );
}

export default Form;