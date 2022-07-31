import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import todosSlice from "./features/todos";
import counterAddSlice from "./features/counterAdd";
import filterStateSlice from "./features/filterState";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { WebStorage } from "redux-persist/lib/types";

const reducers = combineReducers({
  todos: todosSlice,
  counters: counterAddSlice,
  filterState: filterStateSlice,
});

interface persistConfigInterface {
  key: string;
  storage: WebStorage;
  whiteList: any;
}

const persistConfig: persistConfigInterface = {
  key: "root",
  storage,
  whiteList: ["todos", "counters"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
