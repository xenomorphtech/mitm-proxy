import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { isEmpty } from "lodash";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography, Box, TextField, Button } from "@material-ui/core";

import Layout from "../Components/Layout";
import Tabs from "../Components/Tabs";
import LogInView from "../Components/Partials/LogInView";
import SignUpView from "../Components/Partials/SignUpView";


const Login = (props) => {
  const {
    history,
    user
  } = props;

  useEffect(() => {
    if (!isEmpty(user)) {
      history.push("/dashboard");
    }
  }, [user]);

  return (
    <Layout navbar={false}>
      <Paper square className="w-100">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ height: "100vh" }}
        >
          <Grid container xs={11} sm={6} md={6} lg={4}>
            <Paper elevation={4} className="w-100">
              <Box px={2} py={4}>
                <Typography
                  variant="h6"
                  component="h1"
                  align="center"
                  className="font-source-code-pro"
                >
                  <strong>MITM PROXY</strong>
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  paragraph
                >
                  Web interface for network analysis powered by pure functions
                </Typography>
                <br />
                <br />
                <Tabs
                  tabHeadings={["Log In", "Sign Up"]}
                >
                  <LogInView />
                  <SignUpView />
                </Tabs>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Layout>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, {

})(withRouter(Login));