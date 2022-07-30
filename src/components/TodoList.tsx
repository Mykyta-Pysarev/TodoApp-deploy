import React from "react";
import Todo from "./Todo";
import { TodoContainer } from "./Todo.style";
import { Itodos } from "../Interfaces";
import { useSelector } from "react-redux";

interface Props {
  counterEdit: number;
  counterDelete: number;
  setCounterEdit: React.Dispatch<React.SetStateAction<number>>;
  setCounterDelete: React.Dispatch<React.SetStateAction<number>>;
}

const TodoList = ({
  counterEdit,
  counterDelete,
  setCounterEdit,
  setCounterDelete,
}: Props) => {
  const Atodos = useSelector((state: any) => state.todos);
  const filterStatus = useSelector((state: any) => state.filterStatus);
  const sortTodos = Atodos.slice().sort(
    (a: Itodos, b: Itodos) =>
      Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
  );


  // const setTodosFilter = () => {
  //   switch (filterStatus) {
  //     case "completed":
  //       return (sortTodos.filter((todo:Itodos) => todo['completed'] === true));
  //       break;
  //     case "uncompleted":
  //       sortTodos.filter((todo:Itodos) => todo['completed'] === false);
  //       break;
  //     default:
  //       sortTodos;
  //       break;
  //   }
  // }
 

  return (
    <TodoContainer>
      <ul>
        {sortTodos.map((todo: Itodos) =>
          !todo.completed ? (
            <Todo
              background={todo.background}
              key={todo.id}
              text={todo.text}
              todo={todo}
              todos={Atodos}
              counterEdit={counterEdit}
              setCounterEdit={setCounterEdit}
              counterDelete={counterDelete}
              setCounterDelete={setCounterDelete}
            />
          ) : undefined
        )}
      </ul>
    </TodoContainer>
  );
};

export default TodoList;
