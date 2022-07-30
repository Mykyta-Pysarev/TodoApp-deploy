import { createSlice } from "@reduxjs/toolkit";
import { Itodos } from "../Interfaces";

const initialStateValue:Itodos[] = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialStateValue,
  reducers: {
    todoAdded: (state, action) => void state.push(action.payload)
    ,
    todoImport: (state, action) => void state.push(...action.payload)
    ,
    todoDelete: (state, action) => void state.splice(action.payload, 1)
    ,
    todoEdit: (state, action) => {
        const { id, text } = action.payload
        const existingText = state.find(item => item.id === id)
        if (existingText) {
            existingText.text = text
        }
    }, 
    todoCompleted: (state, action) => {
        const { id } = action.payload
        const existingPost = state.find(item => item.id === id)
        if (existingPost) {
          existingPost.completed = !existingPost.completed
        }
    },
    todoDeleteAll: (state) => state = [],
    }
});

export const { todoAdded, todoDelete, todoEdit, todoImport, todoCompleted, todoDeleteAll} = todosSlice.actions;

export default todosSlice.reducer;