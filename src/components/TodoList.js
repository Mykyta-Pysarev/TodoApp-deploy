import React from "react"
import Todo from './Todo'

const TodoList = ({todos, setTodos, filterTodos, setInputText, counterEdit, counterDelete, setCounterEdit, setCounterDelete}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.sort((a,b) => new Date (b.createdAt) - new Date (a.createdAt)).map(todo => ( 
                      <Todo 
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
        </div>
    );
}

export default TodoList;



