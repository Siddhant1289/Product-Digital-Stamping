import React, { Component } from "react";
import "./Manufacturer.css";
class Manufacturer extends Component {
  render() {
    return (
      <div className="container">
        <div className="left">
          <div className="left-top">Left Top</div>
          <div className="left-down">Left Down</div>
        </div>
        <div className="right">Right</div>
      </div>
    );
  }
}

export default Manufacturer;
