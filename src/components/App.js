import React from "react";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./layout/Nav";
import Dashboard from "./Dashboard";

const App = () => (
  <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/signin" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
      </Switch>
    </div>
  </Router>
);

export default App;
