import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux";
import "./App.css";

const App = () => {
  
  return (
    <Provider store={store}>
      <Router>
      <Switch>
          <Route exact path="/" children={<>Hi</>} />
      </Switch>
      </Router>
    </Provider>
  );
}

export default App;
