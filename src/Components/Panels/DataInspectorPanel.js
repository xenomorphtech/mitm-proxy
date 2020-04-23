import React from "react";
import Panel from "./../Common/Panel";
import { TextField, Box } from "@material-ui/core";
import BinaryView from "./../HexEditor/BinaryView";
import { connect } from "react-redux";
import { setHexCode } from "./../../Redux/Actions/HexCode";

const DataInspectorPanel = (props) => {
  const { hexCode, setHexCode } = props;

  const handleChange = (name) => ({ target: { value } }) => {
    switch (name) {
      case "hexCodeValue": setHexCode(value); break;
      default: { }
    }
  };

  return (
    <Panel heading="Data Inspector">
      <Box className="w-100">
        <TextField
          inputProps={{
            maxLength: 2,
            style: { fontFamily: "Source Code Pro" }
          }}
          id="outlined-basic"
          label="Value"
          variant="outlined"
          value={hexCode.toUpperCase()}
          onChange={handleChange("hexCodeValue")}
          className="w-100"
        />
        <br />
        <br />
        <BinaryView
          hexCode={hexCode}
          setHexCode={setHexCode}
        />
      </Box>
    </Panel>
  );
};



export default connect(()=>({}), {
  setHexCode
})(DataInspectorPanel);