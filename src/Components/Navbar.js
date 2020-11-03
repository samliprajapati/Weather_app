import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          padding: 10,

          backgroundColor: "black",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",

            width: "50%",
            color: "white",
          }}
        >
          <Link to="/home" style={{ color: "white" }}>
            {" "}
            <div style={{ marginLeft: "30px" }}>Home</div>
          </Link>
          <Link to="/weather" style={{ color: "white" }}>
            {" "}
            <div style={{ marginLeft: "30px" }}>Weather</div>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",

            width: "50%",
            color: "white",
          }}
        >
          <div style={{ marginRight: "30px" }}>Logout</div>
        </div>
      </div>
    );
  }
}
