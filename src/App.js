import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import Home from "./Components/Home";
import Weather from "./Components/Weather";
import Navbar from "./Components/Navbar";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import PrivateRoute from "./PrivateRoute";
import Mainapp from "./Mainapp";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signUp" component={SignUp} />
        <PrivateRoute path="/" component={Mainapp} />
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/weather" component={Weather} /> */}
      </Switch>
    </div>
  );
}

export default App;
