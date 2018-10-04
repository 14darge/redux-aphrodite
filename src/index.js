import React from "react";
import ReactDOM from "react-dom";
import App from "./Componentes/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Redux/Reducers/combine-reducers.js";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
