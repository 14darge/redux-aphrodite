import { StyleSheet, css } from "aphrodite";

const initialState = StyleSheet.create({
  Button: {
    backgroundColor: "pink"
  },
  Text: {
    color: "orange"
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
