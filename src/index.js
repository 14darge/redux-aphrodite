import React from "react";
import ReactDOM from "react-dom";
import Tontin from "./Componentes/Tontin";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Redux/Reducers/combine-reducers.js";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <Tontin />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
