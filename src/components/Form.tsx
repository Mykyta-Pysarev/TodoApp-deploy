import React, { ChangeEvent, useState, MouseEvent } from "react";
import fetchData from "../FetchData";
import { FormButton, FormDiv } from "./Forms.style";
import { useDispatch, useSelector } from "react-redux";
import { getRandomRGB } from "../help/rgbRandom";
import { todoAdded, todoImport, todoDeleteAll } from "../features/todos";
import { counterAddInc, counterDeleteInc } from "../features/counterAdd";
import { filterState } from "../features/filterState";

const Form = ({}) => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const Atodos = useSelector((state: any) => state.todos);
  const counterAdd = useSelector((state: any) => state.counters.add);
  const counterEdit = useSelector((state: any) => state.counters.edit);
  const counterDelete = useSelector((state: any) => state.counters.delete);

  const inputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(
      todoAdded({
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
        createdAt: String(new Date()),
        background: `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`,
      })
    );
    dispatch(counterAddInc(1));
    setInputText("");
  };

  const importTodos = async () => {
    const result = await fetchData();
    dispatch(todoImport(result));
    dispatch(counterAddInc(result.length));
  };

  const deleteAll = (): void => {
    dispatch(counterDeleteInc(Atodos.length));
    dispatch(todoDeleteAll());
  };

  const statusHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterState(e.target.value));
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
