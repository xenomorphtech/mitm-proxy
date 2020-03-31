import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux";
import "./App.css";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  
  return (
    <Provider store={store}>
      <Router>
      <Switch>
          <Route exact path="/" children={<Login />} />
          <Route exact path="/dashboard" children={<Dashboard />} />
      </Switch>
      </Router>
    </Provider>
  );
}

export default App;
