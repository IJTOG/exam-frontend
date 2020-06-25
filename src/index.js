import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "./store";

import * as serviceWorker from "./serviceWorker";
const { store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
