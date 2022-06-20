import React from "react";

const Todo = ({ text, id, todos, setTodos, todo, setInputText }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return { ...item, completed: !item.completed }
            }
            return item;
        }
        ))
    }

    const editHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return { ...item, edit: !item.edit }
            }
            return item;
        }))
    }

    const inputTextHandler = (e) => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return { ...item, text: e.target.value }
            }
            return item;
        }))
    }



    return (
        <div className="todo">
        <form className="todo">
        {
                    todo.edit ? 
                    <input type='text' autoFocus='autofocus' size={text.length} className={`todo-item ${todo.completed ? 'input-completed' : ''}`} value={text} onChange={inputTextHandler}></input>
                    : <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
                }
                <button type='button' className="complete-btn" onClick={completeHandler}><i className="fas fa-check"></i></button>
                <button type='submit' className="edit-btn" onClick={editHandler}><i className="fas fa-solid fa-pen"></i></button>
                <button className="trash-btn" onClick={deleteHandler}><i className="fas fa-trash"></i></button>
        </form>
               
        </div>
    );
}

export default Todo;