import React, { ChangeEvent ,useState } from "react";
import {
  Button,
  TodoContainer,
  TodoForm,
  TodoInput,
  TodoLi,
} from "./Todo.style";
import {Itodos} from "./Interfaces"

interface Props {
  background:string,
  text:string,
  todos:Itodos[],
  setTodos:React.Dispatch<React.SetStateAction<Itodos[]>>,
  todo:Itodos,
  counterEdit:number,
  counterDelete:number,
  setCounterEdit:React.Dispatch<React.SetStateAction<number>>,
  setCounterDelete:React.Dispatch<React.SetStateAction<number>>,
}

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
}:Props) => {
  const [editState, setEditState] = useState(false);
  const [editText, setEditText] = useState(text);

  const deleteHandler = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setCounterDelete(counterDelete + 1);
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = (e: ChangeEvent<HTMLButtonElement>) => {
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

  const editHandler = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setEditState(true);
  };

  const editFinished = (e: ChangeEvent<HTMLButtonElement>) => {
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

  const inputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 27){
        setEditText(text);
        setEditState(false);
    }
  }

  if (editState && todo.completed) {
    todoElement = (
      <TodoInput<any>
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
      <TodoInput<any>
        background={background}
        type="text"
        autoFocus="autofocus"
        value={editText}
        onChange={inputTextHandler}
        onKeyDown={handleKeyDown}
      />
    );
  } else if (!editState && !todo.completed) {
    todoElement = <TodoLi<any> background={background}>{text}</TodoLi>;
  } else {
    todoElement = (
      <TodoLi<any> completed background={background}>
        {text}
      </TodoLi>
    );
  }

  if (editState) {
    editButton = (
      <Button<any>
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
      <Button<any> edit type="submit" className="edit-btn" onClick={editHandler}>
        <i className="fas fa-solid fa-pen"></i>
      </Button>
    );
  }

  return (
    <TodoContainer>
      <TodoForm>
        {todoElement}
        <Button<any> complete type="button" onClick={completeHandler}>
          <i className="fas fa-check"></i>
        </Button>
        {editButton}
        <Button<any> type="button" className="trash-btn" onClick={deleteHandler}>
          <i className="fas fa-trash"></i>
        </Button>
      </TodoForm>
    </TodoContainer>
  );
};

export default Todo;
