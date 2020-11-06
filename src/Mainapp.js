import React from "react";
import { Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import Home from "./Components/Home";
import Weather from "./Components/Weather";
import Navbar from "./Components/Navbar";

function Mainapp() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/weather" component={Weather} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default Mainapp;
