import React from "react"
import Todo from './Todo'

const TodoList = ({todos, setTodos, filterTodos, setInputText}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map(todo => ( 
                      <Todo 
                      key={todo.id} 
                      text={todo.text} 
                      id={todo.id}
                      todo={todo}
                      todos={todos} 
                      setTodos={setTodos}
                      setInputText={setInputText}
                       />
                      ))}
            </ul>
        </div>
    );
}

export default TodoList;



