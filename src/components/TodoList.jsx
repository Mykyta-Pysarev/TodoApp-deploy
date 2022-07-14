import React from "react";
import Todo from "./Todo";
import { TodoContainer } from "./Todo.style";

const TodoList = ({
  todos,
  setTodos,
  filterTodos,
  setInputText,
  counterEdit,
  counterDelete,
  setCounterEdit,
  setCounterDelete,
}) => {
  return (
    <TodoContainer>
      <ul>
        {filterTodos
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((todo) => (
            <Todo
              background={todo.background}
              key={todo.id}
              text={todo.text}
              id={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              setInputText={setInputText}
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
