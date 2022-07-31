import React from "react";
import Todo from "./Todo";
import { TodoContainer } from "./Todo.style";
import { Itodos } from "../Interfaces";
import { useSelector } from "react-redux";

const TodoList = () => {
  const Atodos = useSelector((state: any) => state.todos);
  const filterStatus = useSelector((state: any) => state.filterState);
  const sortTodos: Itodos[] = Atodos.slice().sort(
    (a: Itodos, b: Itodos) =>
      Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
  );

  let todoList;

  if (filterStatus === "completed") {
    todoList = sortTodos.map((todo: Itodos) =>
      todo.completed ? (
        <Todo
          background={todo.background}
          key={todo.id}
          text={todo.text}
          todo={todo}
          todos={Atodos}
        />
      ) : null
    );
  } else if (filterStatus === "uncompleted") {
    todoList = sortTodos.map((todo: Itodos) =>
      !todo.completed ? (
        <Todo
          background={todo.background}
          key={todo.id}
          text={todo.text}
          todo={todo}
          todos={Atodos}
        />
      ) : null
    );
  } else {
    todoList = sortTodos.map((todo: Itodos) => (
      <Todo
        background={todo.background}
        key={todo.id}
        text={todo.text}
        todo={todo}
        todos={Atodos}
      />
    ));
  }

  return (
    <TodoContainer>
      <ul>{todoList}</ul>
    </TodoContainer>
  );
};

export default TodoList;
