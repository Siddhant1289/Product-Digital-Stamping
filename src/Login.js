import React, { Component } from "react";
class Login extends Component {
  fun = () => {
    alert("Welcome");
  };
  render() {
    return (
      <div>
        Welcome
        <div>Hello</div>
        <div>AAA</div>
        <button onClick={this.fun}>Click Here</button>
      </div>
    );
  }
}
export default Login;
