import React from "react";
import { connect } from "react-redux";

import { setHexCode } from "../../Redux/Actions/HexCode";

const SingleHex = (props) => {

  const {
    hex,
    setHexCode
  } = props;

  return (
    <span
      className="hex-span"
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