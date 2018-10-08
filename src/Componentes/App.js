import React from "react";
//import { MyButton, MyP } from "./glamorous/styles.js";
import { StyleSheet, css } from "aphrodite";
import { selectTheme } from "../Actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./app.css";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: "One"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        mensaje: prevState.mensaje === "One" ? "Two" : "One"
      };
    });
  }

  render() {
    return (
      <div>
        <div className={css(this.props.themes.Pablito)}>
          <p className="clavito">
            Hello World!
          </p>
        </div>
        <button
          className={"appStyle " + css(this.props.themes.Button)}
          onClick={this.handleClick}
        >
          Click Me
        </button>
        <p className={css(this.props.themes.Text)}>{this.state.mensaje}</p>
        <button onClick={() => this.props.selectTheme()}>Change me</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    themes: state.themes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectTheme: selectTheme }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);