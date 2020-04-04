import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux";
import "./App.css";

import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" children={<Dashboard />} />
          <Route exact path="/login" children={<Login />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
