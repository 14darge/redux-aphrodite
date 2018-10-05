import { StyleSheet, css } from "aphrodite";

const initialState = StyleSheet.create({
  Button: {
    backgroundColor: "#2390c2",
    color: "white"
  },
  Text: {
    color: "orange"
  },
  Pablito: {
    ":first-child .clavito": {
    // " .clavito": {
      color: "purple"
    }
  }
});

export default function(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_THEME": {
      return action.payload;
    }
    default:
      return state;
  }
}
