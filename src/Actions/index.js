import { StyleSheet, css } from "aphrodite";

export function selectTheme() {
  return {
    type: "CHANGE_THEME",
    payload: StyleSheet.create({
      Button: {
        backgroundColor: "grey"
      },
      Text: {
        color: "blue"
      },
      Pablito: {
        ":first-child .clavito": {
          // " .clavito": {
          color: "blue"
        }
      }
    })
  };
}
