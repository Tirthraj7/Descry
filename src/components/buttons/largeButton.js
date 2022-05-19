// import external modules
import React, { Component } from "react";
import { connect } from "react-redux";
// import "../../assets/css/Buttons/largeButton.css"

class LargeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      disable: false,
      emailError: "",
      passwordError: "",
      showPassword: false,
    };
  }

  render() {
    return (
      <div>
        <button className="abcd">{this.props.value}</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {} = state.login;
  return {};
};
export default connect(mapStateToProps, {})(LargeButton);
