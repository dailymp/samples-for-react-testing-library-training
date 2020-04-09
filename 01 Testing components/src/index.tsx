import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";
import { App } from "./app";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { rootReducer } from "./store/contact/index";

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

