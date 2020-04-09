import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Snackbar, Grow, Backdrop, CircularProgress } from "@material-ui/core";

import NavBar from "./NavBar";
import { hideSnackbar } from "../Redux/Actions/Page";

import "typeface-source-code-pro";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  }
}));

const Layout = (props) => {
  const classes = useStyles();
  const { role, title, snackbar, hideSnackbar, backdrop } = props;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    hideSnackbar({ ...snackbar, open: false });
  };

  return (
    <div className={classes.root}>
      {snackbar && <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackbar.msg}
        TransitionComponent={(props) => <Grow {...props} />}
      />}
      {backdrop.count && <Backdrop className={classes.backdrop} open={Boolean(backdrop.count)}>
        <CircularProgress color="inherit" />
      </Backdrop>}
      <NavBar role={role} title={title} />
      {props.children}
    </div>
  );
};

const mapStateToProps = state => ({
  snackbar: state.page.snackbar,
  backdrop: state.page.backdrop
});

export default connect(mapStateToProps, {
  hideSnackbar
})(Layout);