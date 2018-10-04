import React from "react";
import { StyleSheet, css } from "aphrodite";
import { selectTheme } from "../Actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
        mensaje: prevState.mensaje === "One" ? "Two" : "One",
      };
    });
  }
  render() {
    return (
      <div>
        <button
          className={css(this.props.themes.Button)}
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
