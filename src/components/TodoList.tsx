import React from "react";
import Todo from "./Todo";
import { TodoContainer } from "./Todo.style";
import {Itodos} from "./Interfaces"

interface Props {
  todos:Itodos[],
  setTodos:React.Dispatch<React.SetStateAction<Itodos[]>>,
  filterTodos:Itodos[],
  counterEdit:number,
  counterDelete:number,
  setCounterEdit:React.Dispatch<React.SetStateAction<number>>,
  setCounterDelete:React.Dispatch<React.SetStateAction<number>>,
}

const TodoList = ({
  todos,
  setTodos,
  filterTodos,
  counterEdit,
  counterDelete,
  setCounterEdit,
  setCounterDelete,
}:Props) => {
  return (
    <TodoContainer>
      <ul>
        {filterTodos
          .sort((a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)))
          .map((todo) => (
            <Todo
              background={todo.background}
              key={todo.id}
              text={todo.text}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              counterEdit={counterEdit}
              setCounterEdit={setCounterEdit}
              counterDelete={counterDelete}
              setCounterDelete={setCounterDelete}
            />
          ))}
      </ul>
    </TodoContainer>
  );
};

export default TodoList;
