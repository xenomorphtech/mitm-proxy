import React, { useState, useEffect } from 'react';
import { isEmpty } from "lodash";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Modal from './../Common/Modal';
import Regex from './../../Constants/Regex';

const formOrder = ["name", "host", "port"];

const makeQueriesFromForm = (form) => {
  const values = {};
  Object.keys(form).forEach(v => values[v] = form[v].value);
  return values;
};

const ConnectionModal = (props) => {

  const initForm = {
    name: {
      label: "Name",
      name: "name",
      value: "",
      error: false,
      validation: Regex.NAME,
      helperText: "Name must be 5 letters or more"
    },
    host: {
      label: "Host",
      name: "host",
      value: "",
      error: false,
      validation: Regex.URL,
      helperText: "Host must be 5 letters or more"
    },
    port: {
      label: "Port",
      name: "port",
      value: "",
      error: false,
      validation: Regex.PORT,
      helperText: "Port must be 4 letters or more"
    }
  };

  const { open, setOpen, queries, setQueries, index, handleSaveConnection, handleEditConnection } = props;

  const handleClose = () => {
    setOpen(false);
    setForm(initForm);
    setQueries({});
  };

  //
  // ───────────────────────────────────────────────────── FORM UTILITIES ─────
  //

  const [form, setForm] = useState(initForm);

  const formChange = ({ target: { name, value } }) => {
    const field = { ...form[name] };
    field.value = value;
    const newForm = { ...form, [name]: field };
    setForm(newForm);
  };

  const formBlur = ({ target: { name, value } }) => {
    const field = { ...form[name] };
    field.error = !field.validation.test(value);
    const newForm = { ...form, [name]: field };
    setForm(newForm);
  };

  const validateForm = () => Object.values(form).every(e => !e.validation.test(e.value) === false);

  //
  // ──────────────────────────────────────────────────────────────────────────
  //

  const disabled = !Object.values(form).every(e => !isEmpty(e.value) && e.error === false);

  useEffect(() => {
    if (index === -1) {
      setForm(initForm);
    } else {
      const newForm = { ...form };
      Object.entries(queries).forEach(([key, value]) => {
        newForm[key].value = value;
      });
      setForm(newForm);
    }
  }, [queries]);

  const handlePrimary = () => {
    const queries = makeQueriesFromForm(form);
    handleClose();
    if (index >= 0) {
      handleEditConnection(queries, index);
    } else {
      handleSaveConnection(queries);
    }
  };

  return (
    <Modal
      width="xs"
      open={open}
      setOpen={handleClose}
    >
      <DialogTitle id="form-dialog-title">{index >= 0 ? "Edit" : "Add"} Connection</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {/* Create new connection */}
        </DialogContentText>
        {formOrder.map((e, i) => (
          <span className="w-100" key={i}>
            <TextField
              variant="outlined"
              onChange={formChange}
              onBlur={formBlur}
              label={form[e].label}
              name={form[e].name}
              value={form[e].value}
              error={form[e].error}
              helperText={form[e].error ? form[e].helperText : " "}
              type={form[e].type}
              fullWidth
            />
            <br />
            <br />
          </span>
        ))}
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePrimary}
          disabled={disabled}
        >
          Save Connection
          </Button>
      </DialogActions>
    </Modal>
  );
};

export default ConnectionModal;