import { StyleSheet, css } from "aphrodite";
import { selectTheme } from "../Actions";

/*export default function() {
 return StyleSheet.create({
    Button: {
      backgroundColor: "pink"
    },
    Text: {
      color: "orange"
    }
  });
}*/

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
    case "CHANGE THEME":
      return StyleSheet.create({
        Button: {
          backgroundColor: "purple"
        },
        Text: {
          color: "green"
        }
      });
    default:
      return state;
  }
}
