import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { combineReducers } from "redux";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Reducer1, Reducer2 } from "./components/Reducer";

const store = createStore(
  combineReducers({
    Reducer1,
    Reducer2,
  })
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
