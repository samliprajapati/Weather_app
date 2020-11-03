import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Home} />
        {/* <Route exact path="/weather" component={Weather} /> */}
      </Switch>
    </div>
  );
}

export default App;
