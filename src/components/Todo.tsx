import React, { ChangeEvent, useState, MouseEvent } from "react";
import {
  Button,
  TodoContainer,
  TodoForm,
  TodoInput,
  TodoLi,
} from "./Todo.style";
import { Itodos } from "../Interfaces";
import { useDispatch } from "react-redux";
import { todoDelete, todoEdit, todoCompleted } from "../features/todos";
import { counterEditInc, counterDeleteInc } from "../features/counterAdd";

interface Props {
  background: string;
  text: string;
  todos: Itodos[];
  todo: Itodos;
}

const Todo = ({ background, text, todos, todo }: Props) => {
  const dispatch = useDispatch();

  const [editState, setEditState] = useState(false);
  const [editText, setEditText] = useState(text);

  const deleteHandler = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(counterDeleteInc(1));
    dispatch(todoDelete(todos.indexOf(todo)));
  };

  const completeHandler = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(todoCompleted({ id: todo.id, completed: true }));
  };

  let todoElement;
  let editButton;

  const editHandler = (e: MouseEvent) => {
    e.preventDefault();
    setEditState(true);
  };

  const editFinished = (e: MouseEvent) => {
    e.preventDefault();
    if (todo.text !== editText) {
      dispatch(counterEditInc(1));
    }
    dispatch(todoEdit({ id: todo.id, text: editText }));
    setEditState(false);
  };

  const inputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setEditText(text);
      setEditState(false);
    }
  };

  if (editState && todo.completed) {
    todoElement = (
      <TodoInput
        completed
        background={background}
        type="text"
        autoFocus
        value={editText}
        onChange={inputTextHandler}
        onKeyDown={handleKeyDown}
      />
    );
  } else if (editState && !todo.completed) {
    todoElement = (
      <TodoInput
        background={background}
        type="text"
        autoFocus
        value={editText}
        onChange={inputTextHandler}
        onKeyDown={handleKeyDown}
      />
    );
  } else if (!editState && !todo.completed) {
    todoElement = <TodoLi background={background}>{text}</TodoLi>;
  } else {
    todoElement = (
      <TodoLi completed background={background}>
        {text}
      </TodoLi>
    );
  }

  if (editState) {
    editButton = (
      <Button
        editActive
        type="submit"
        className="edit-btn"
        onClick={editFinished}
      >
        <i className="fas fa-solid fa-pen"></i>
      </Button>
    );
  } else {
    editButton = (
      <Button edit type="submit" className="edit-btn" onClick={editHandler}>
        <i className="fas fa-solid fa-pen"></i>
      </Button>
    );
  }

  return (
    <TodoContainer>
      <TodoForm>
        {todoElement}
        <Button complete type="button" onClick={completeHandler}>
          <i className="fas fa-check"></i>
        </Button>
        {editButton}
        <Button type="button" className="trash-btn" onClick={deleteHandler}>
          <i className="fas fa-trash"></i>
        </Button>
      </TodoForm>
    </TodoContainer>
  );
};

export default Todo;
