import React from "react";
import { Button, TodoContainer, TodoForm, TodoInput, TodoLi } from "./Todo.style";


const Todo = ({ background, text, id, todos, setTodos, todo, counterEdit, counterDelete, setCounterEdit, setCounterDelete }) => {
    const deleteHandler = () => {
        setCounterDelete(counterDelete + 1);
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

    const editHandler = (e) => {
        e.preventDefault();

        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                if (!item.edit) {
                    setCounterEdit(counterEdit + 1);
                }
                return { ...item, edit: !item.edit }
            }
            return item;

        }))
    }

    const inputTextHandler = (e) => {
        e.preventDefault();

        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return { ...item, text: e.target.value }
            }
            return item;
        }))
    }



    return (
        <TodoContainer>
            <TodoForm className="todo" onSubmit={editHandler}>
                {
                    todo.edit && !todo.completed
                    ? <TodoInput type='text' autoFocus='autofocus' value={text} onChange={inputTextHandler} />
                    : todo.edit && todo.completed
                    ? <TodoInput completed type='text' autoFocus='autofocus' value={text} onChange={inputTextHandler} />
                    : !todo.edit && !todo.completed
                    ? <TodoLi background={background}>{text}</TodoLi>
                    : <TodoLi completed>{text}</TodoLi>
                }
                <Button complete type='button' onClick={completeHandler}><i className="fas fa-check"></i></Button>
                <Button edit type='submit' className="edit-btn" /*onClick={editHandler}*/><i className="fas fa-solid fa-pen"></i></Button>
                <Button type='button' className="trash-btn" onClick={deleteHandler}><i className="fas fa-trash"></i></Button>
            </TodoForm>

        </TodoContainer>
    );
}

export default Todo;