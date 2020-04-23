import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { isEmpty } from "lodash";

import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Grow from "@material-ui/core/Grow";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import NavBar from "./NavBar";
import { hideSnackbar } from "./../../Redux/Actions/Page";

import "typeface-source-code-pro";
import "typeface-roboto";

import { resetUser } from "./../../Redux/Actions/Auth";
import { setStore, saveStore } from "./../../Redux/Actions/App";
import { showLoading, hideLoading } from "./../../Redux/Actions/Page";


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
  const { resetUser, setStore, saveStore, showLoading, hideLoading, hideSnackbar } = props;
  const { history, user, snackbar, backdrop } = props;

  const { role, title, navbar = true } = props;

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    hideSnackbar(snackbar);
  };

  useEffect(() => {
    if (isEmpty(user)) {
      history.push("/");
    }
  }, [user]);

  return (
    <div className={classes.root}>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={snackbar.msg}
        TransitionComponent={(props) => <Grow {...props} />}
      >
        <Alert elevation={6} variant="filled" severity={snackbar.severity}>
          {snackbar.msg}
        </Alert>
      </Snackbar>
      {backdrop <= 0 ? <></> :
        <Backdrop className={classes.backdrop} open={Boolean(backdrop)}>
          <CircularProgress color="inherit" />
        </Backdrop>
      }
      {navbar ?
        <NavBar
          role={role}
          title={title}
          user={user}
          history={history}
          showLoading={showLoading}
          hideLoading={hideLoading}
          setStore={setStore}
          saveStore={saveStore}
          resetUser={resetUser}
        /> : <></>
      }
      {props.children}
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  snackbar: state.page.snackbar,
  backdrop: state.page.backdrop
});

export default connect(mapStateToProps, {
  resetUser,
  showLoading,
  hideLoading,
  setStore,
  saveStore,
  hideSnackbar
})(withRouter(Layout));