import React, { useMemo } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux";
import "./App.css";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Dashboard from "./Pages/Dashboard";
import Communication from "./Pages/Communication";
import Login from "./Pages/Login";

const App = () => {

  const prefersDarkMode = true;

  const theme = useMemo(() => {
    return createMuiTheme({
      palette: {
        type: prefersDarkMode ? 'dark' : 'light',
      }
    })
  }, [prefersDarkMode]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" children={<Communication />} />
            <Route exact path="/dashboard" children={<Dashboard />} />
            <Route exact path="/login" children={<Login />} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
