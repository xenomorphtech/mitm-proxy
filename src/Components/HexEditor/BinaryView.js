import React from "react";
import _ from "lodash";

import C from "../../Utils/Conversion";

import PropTypes from 'prop-types';
import { Checkbox, Tooltip } from "@material-ui/core";

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
      <Tooltip key={"bit-toggle-" + i} title={"Bit "+(8-i)} aria-label={"bit-"+(8-i)}>
        <Checkbox
          key={"checkbox-" + i}
          style={{ padding: "0.1rem" }}
          checked={Boolean(v)}
          onChange={setValues(i)}
        />
      </Tooltip>
    ))}
  </>;
};

BinaryView.propTypes = {
  hexCode: PropTypes.string,
  sethexCode: PropTypes.func
}

export default BinaryView;