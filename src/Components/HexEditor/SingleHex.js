import React from "react";
import { connect } from "react-redux";

import { setHexCode } from "../../Redux/Actions/HexCode";

const SingleHex = (props) => {

  const {
    hex,
    setHexCode
  } = props;

  // const onMouseEnterOnHex = (event) => {
  //   const { target } = event;
  //   const { target: { dataset: { hex } } } = event;

  //   target.style.background = "#FFFFFF50";
  //   // setHexCode(hex);
  // };

  // const onMouseLeaveFromHex = (event) => {
  //   const { target } = event;
  //   const { target: { dataset: { hex } } } = event;

  //   target.style.background = "#FFFFFF00";
  //   // setHexCode(hex);
  // };

  return (
    <span
      className="value-span hex-span"
      // onMouseEnter={onMouseEnterOnHex}
      // onMouseLeave={onMouseLeaveFromHex}
      data-hex={hex}
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