import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import { setHexCode } from "../../Redux/Actions/HexCode";

const useStyles = makeStyles(theme => ({
  hexSpan: {
    textAlign: "center",
    cursor: "pointer",
    padding: "0px 4px 0px 4px",
    transition: "background 0.150s ease-out",
    "&:hover": {
      background: theme.palette.type === "dark" ? "#FFFFFF50" : "#00000050"
    }
  }
}));

const SingleHex = (props) => {
  const classes = useStyles();

  const {
    hex,
    setHexCode
  } = props;

  return (
    <span
      className={classes.hexSpan}
      onClick={() => setHexCode(hex)}
    >
      {hex.toUpperCase()}
    </span>
  );
}

const mapStateToProps = st => ({});

export default connect(mapStateToProps, {
  setHexCode
})(SingleHex);