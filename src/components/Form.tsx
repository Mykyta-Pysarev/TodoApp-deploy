import React, { FC, ChangeEvent, useState } from "react";
import fetchData from "../FetchData";
import { FormButton, FormDiv } from "./Forms.style";
import {Itodos} from "../Interfaces";
import {getRandomRGB} from "../help/rgbRandom"

interface Props {
  todos:Itodos[],
  setTodos:React.Dispatch<React.SetStateAction<Itodos[]>>,
  setStatus:React.Dispatch<React.SetStateAction<string>>,
  setCounterAdd:React.Dispatch<React.SetStateAction<number>>,
  counterAdd:number,
  counterEdit:number,
  counterDelete:number,
  setCounterDelete:React.Dispatch<React.SetStateAction<number>>,
}

const Form = ({
  todos,
  setTodos,
  setStatus,
  setCounterAdd,
  counterAdd,
  counterEdit,
  counterDelete,
  setCounterDelete,
}:Props) => {
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const getRandomIntInclusive = ():number => {
    return Math.floor(Math.random() * (255 + 1));
  };

  const submitTodoHandler = (e: ChangeEvent<HTMLInputElement>) => {
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
        background: `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`,
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

  const deleteAll = ():void => {
    setCounterDelete(counterDelete + todos.length);
    setTodos([]);
  };

  const statusHandler = (e: ChangeEvent<HTMLSelectElement>) => {
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
          <FormButton<any> importButton onClick={importTodos}>
            <i className="fas fa-solid fa-file-medical"></i>
          </FormButton>
          {"\u00a0\u00a0"}
        </div>
        <div>
          <FormButton<any> deleteAll onClick={deleteAll}>
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
        <FormButton<any> onClick={submitTodoHandler} type="submit">
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
