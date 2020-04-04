import React from "react";
import _ from "lodash";

import C from "../../Utils/Conversion";

import PropTypes from 'prop-types';
import { Checkbox } from "@material-ui/core";

const BinaryView = (props) => {
  const { hexCode, setHexCode } = props;

  const values = C.hexToBinArr(hexCode);

  const setValues = (i) => ({ target: { checked } }) => {
    const newValues = [...values];
    newValues[i] = checked;

    const newHexCode = C.binArrToHex(newValues);
    setHexCode(newHexCode);
  };

  return <>
    {values.map((v, i) => (
      <Checkbox
        style={{ padding: "0.1rem" }}
        checked={v}
        onChange={setValues(i)}
      />
    ))}
  </>;
};

BinaryView.propTypes = {
  hexCode: PropTypes.arrayOf(PropTypes.string),
  sethexCode: PropTypes.func
}

export default BinaryView;