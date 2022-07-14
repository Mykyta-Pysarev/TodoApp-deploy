import React, { useState } from "react";
import {
  Button,
  TodoContainer,
  TodoForm,
  TodoInput,
  TodoLi,
} from "./Todo.style";

const Todo = ({
  background,
  text,
  todos,
  setTodos,
  todo,
  counterEdit,
  counterDelete,
  setCounterEdit,
  setCounterDelete,
  id,
}) => {
  const [editState, setEditState] = useState(false);
  const [editText, setEditText] = useState(text);

  const deleteHandler = (e) => {
    e.preventDefault();

    setCounterDelete(counterDelete + 1);
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = (e) => {
    e.preventDefault();

    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  let todoElement;
  let editButton;

  const editHandler = (e) => {
    e.preventDefault();

    setEditState(true);
  };

  const editFinished = (e) => {
    e.preventDefault();

    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          if (item.text !== editText) {
            setCounterEdit(counterEdit + 1);
          }
          return { ...item, text: editText };
        }
        return item;
      })
    );
    setEditState(false);
  };

  const inputTextHandler = (e) => {
    setEditText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 27){
        setEditText(text);
        setEditState(false);
    }
  }

  if (editState && todo.completed) {
    todoElement = (
      <TodoInput
        completed
        background={background}
        type="text"
        autoFocus="autofocus"
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
        autoFocus="autofocus"
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
        edit
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
