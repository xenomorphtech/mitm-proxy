import React from "react";
import PropTypes from 'prop-types';

import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, Tooltip, FormControl, FormLabel, Box } from "@material-ui/core";

import C from "./../../Utils/Conversion";

const useStyles = makeStyles((theme) => ({
  boxInForm: {
    marginTop: theme.spacing(1)
  }
}))

const BinaryView = (props) => {
  const classes = useStyles();
  const { hexCode, setHexCode } = props;

  const values = C.hexToBinArr(hexCode);

  const setValues = (i) => ({ target: { checked } }) => {
    const newValues = [...values];
    newValues[i] = checked;

    const newHexCode = C.binArrToHex(newValues);
    setHexCode(newHexCode);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Binary Digits</FormLabel>
      <Box row className={classes.boxInForm}>
        {values.map((v, i) => (
          <Tooltip key={"bit-toggle-" + i} title={"Bit " + (8 - i)} aria-label={"bit-" + (8 - i)}>
            <Checkbox
              key={"checkbox-" + i}
              checked={Boolean(v)}
              onChange={setValues(i)}
            />
          </Tooltip>
        ))}
      </Box>
    </FormControl>
  );
};

BinaryView.propTypes = {
  hexCode: PropTypes.string,
  sethexCode: PropTypes.func
};

export default BinaryView;