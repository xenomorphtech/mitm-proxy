import React, { useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from "./Redux";
import "./App.css";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Dashboard from "./Pages/Dashboard";
import Communication from "./Pages/Communication";
import Login from "./Pages/Login";

const App = () => {

  const prefersDarkMode = false;

  const theme = useMemo(() => {
    return createMuiTheme({
      palette: {
        type: prefersDarkMode ? 'dark' : 'light',
      }
    })
  }, [prefersDarkMode]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path="/" children={<Login />} />
              <Route exact path="/dashboard" children={<Dashboard />} />
              <Route exact path="/communication" children={<Communication />} />
            </Switch>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
