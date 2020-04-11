import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { isEmpty } from "lodash";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography, Box, TextField, Button } from "@material-ui/core";

import { signIn } from "../Redux/Actions/Auth";
import Layout from "../Components/Layout";

const initForm = {
  username: {
    label: "Username",
    name: "username",
    value: "",
    error: false,
    validation: /[a-zA-Z0-9]{5,}/,
    helperText: "Username must be 5 letters or more"
  },
  password: {
    label: "Password",
    name: "password",
    value: "",
    error: false,
    validation: /.{8,}/,
    helperText: "Password must be 8 letters or more",
    type: "password"
  }
};

const formOrder = ["username", "password"];

const Login = (props) => {
  const {
    history,
    user,
    signIn
  } = props;

  //
  // ───────────────────────────────────────────────────── FORM UTILITIES ─────
  //

  const [form, setForm] = useState(initForm);

  const formChange = ({ target: { name, value } }) => {
    const field = { ...form[name] };
    field.value = value
    const newForm = {
      ...form,
      [name]: field
    };
    setForm(newForm);
  };

  const formBlur = ({ target: { name, value } }) => {
    const field = { ...form[name] };
    field.error = !field.validation.test(value);
    const newForm = {
      ...form,
      [name]: field
    };
    setForm(newForm);
  };

  const validateForm = () => {
    const newForm = { ...form };
    Object.values(newForm).forEach(e => {
      e.error = !e.validation.test(e.value);
    });
    setForm(newForm);
    return Object.values(form).every(v => v.error === false);
  };

  //
  // ──────────────────────────────────────────────────────────────────────────
  //

  useEffect(() => {
    if (!isEmpty(user)) {
      history.push("/dashboard");
    }
  }, [user]);

  const onClickLogin = () => {
    // if (validateForm()) {
    console.log("GO TO DASHBOARD");
    // Todo : Login API
    // authenticate(values);
    signIn();
    // history.push("/");
    // }
  };

  const loginBtnDisabled = !Object.values(form).every(e => !isEmpty(e.value) || e.error === false);

  return (
    <Layout navbar={false}>
      <Paper className="w-100">
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
                <br />
                <br />
                <Typography
                  variant="body1"
                  align="center"
                  paragraph
                >
                  Sign In to your start network analysis
              </Typography>
                {formOrder.map(e => (
                  <>
                    <TextField
                      className="w-100"
                      variant="outlined"
                      onChange={formChange}
                      onBlur={formBlur}
                      label={form[e].label}
                      name={form[e].name}
                      value={form[e].value}
                      error={form[e].error}
                      helperText={form[e].error ? form[e].helperText : " "}
                      type={form[e].type}
                    />
                    <br />
                    <br />
                  </>
                ))}
                <br />
                <br />
                <br />
                <Grid
                  container
                  direction="row-reverse"
                >
                  <Button
                    disabled={loginBtnDisabled}
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={onClickLogin}
                  >
                    Submit
                </Button>
                </Grid>
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
  signIn
})(withRouter(Login));