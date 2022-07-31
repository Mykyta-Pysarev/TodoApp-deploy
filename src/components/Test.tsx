import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
  const Atodos = useSelector((state: any) => state.todos);
  console.log(Atodos);
  return (
    <ul>
      {Atodos.map((item: any) => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
};

export default Test;
