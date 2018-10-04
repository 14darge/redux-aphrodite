import { combineReducers } from "redux";
import styles from "./theme-reducer.js";

const rootReducer = combineReducers({
  themes: styles
});

export default rootReducer;