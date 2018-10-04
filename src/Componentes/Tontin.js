import React from "react";
//import { MyButton, MyP } from "./glamorous/styles.js";
import { StyleSheet, css } from "aphrodite";
import { selectTheme } from "../Actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Tontin extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: "Tontin"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        mensaje: prevState.mensaje === "Tontin" ? "Pendejin" : "Tontin"
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
          Apachurrame we
        </button>
        <p className={css(this.props.themes.Text)}>{this.state.mensaje}</p>
        <button>Checale we</button>
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

export default connect(mapStateToProps)(Tontin);

//export default Tontin;

//Pendejo reciba los import que están mal hechos
