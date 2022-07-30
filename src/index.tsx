import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import todosSlice from "./features/todos"
import counterAddSlice from "./features/counterAdd"
import filterStateSlice from "./features/filterState"

const store = configureStore({
  reducer: {
    todos: todosSlice,
    counterAdd: counterAddSlice,
    filterState: filterStateSlice,
  },
  devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
