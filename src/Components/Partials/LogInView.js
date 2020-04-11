import React, { useState } from "react";
import { isEmpty } from "lodash";
import { connect } from "react-redux";

import { Grid, TextField, Button } from "@material-ui/core";

import { logIn } from "../../Redux/Actions/Auth";

const initForm = {
  username: {
    label: "Username",
    name: "username",
    value: "",
    error: false,
    validation: /^([a-zA-Z0-9]{5,})$/,
    helperText: "Username must be 5 letters or more"
  },
  password: {
    label: "Password",
    name: "password",
    value: "",
    error: false,
    validation: /^(.{8,})$/,
    helperText: "Password must be 8 letters or more",
    type: "password"
  }
};

const formOrder = ["username", "password"];

const makeValuesFromForm = (form) => {
  const values = {};
  Object.keys(form).forEach(v => values[v] = form[v].value);
  return values;
};

const LogInView = (props) => {

  const { logIn } = props;

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

  const onClickLogin = () => {
    // if (validateForm()) {
      console.log("GO TO DASHBOARD");
      logIn(makeValuesFromForm(form));
    // }
  };
  
  const loginBtnDisabled = !Object.values(form).every(e => !isEmpty(e.value) || e.error === false);

  return <>
    <br />
    <br />
    {formOrder.map((e, i) => (
      <span key={i}>
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
      </span>
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
  </>;
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
  logIn
})(LogInView);