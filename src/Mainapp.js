import React from "react";
import { Switch, Route } from "react-router-dom";

import "antd/dist/antd.css";
import Home from "./Components/Home";
import Weather from "./Components/Weather";
import Navbar from "./Components/Navbar";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import PrivateRoute from "./PrivateRoute";

function Mainapp() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/weather" component={Weather} />
      </Switch>
    </div>
  );
}

export default Mainapp;
