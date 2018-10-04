import { StyleSheet, css } from "aphrodite";

export function selectTheme() {
  return {
    type: "CHANGE_THEME",
    payload: StyleSheet.create({
      Button: {
        backgroundColor: "purple"
      },
      Text: {
        color: "green"
      }
    })
  };
}
