import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { isEmpty } from "lodash";

import { makeStyles } from "@material-ui/core/styles";
import { Snackbar, Grow, Backdrop, CircularProgress } from "@material-ui/core";

import NavBar from "./NavBar";
import { hideSnackbar } from "../Redux/Actions/Page";

import "typeface-source-code-pro";
import "typeface-roboto";

import { getUserDetails } from "../Utils/LocalStorage";
import { setUser } from "../Redux/Actions/Auth";


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
  const { history, user, setUser, snackbar, backdrop, hideSnackbar } = props;

  const { role, title, navbar = true } = props;

  useEffect(() => {
    const userDetails = getUserDetails();
    if (!isEmpty(userDetails)) {
      setUser(userDetails);
      if(history.location.pathname === "/"){
        history.push("/dashboard");
      }
    } else {
      history.push("/");
    }
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    hideSnackbar({ ...snackbar, open: false });
  };

  return (
    <div className={classes.root}>
      {snackbar ?
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={snackbar.msg}
          TransitionComponent={(props) => <Grow {...props} />}
        /> : <></>
      }
      {backdrop.count ?
        <Backdrop className={classes.backdrop} open={Boolean(backdrop.count)}>
          <CircularProgress color="inherit" />
        </Backdrop> : <></>
      }
      {navbar ? <NavBar role={role} title={title} user={user} /> : <></>}
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
  setUser,
  hideSnackbar
})(withRouter(Layout));