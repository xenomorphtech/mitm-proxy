import React from "react";
import { Grid } from "@material-ui/core";
import C from "../../Utils/Conversion";
import ChunkHex from "../HexEditor/ChunkHex";

// Todo
// 
// 1. AddressView, HexView, AsciiView
// 2. Identity Packet Size and Set Height of View accordingly

const PacketView = (props) => {
  const { hexStr } = props;
  const lines = hexStr.match(/.{1,32}/g);

  console.log(hexStr, lines);

  const makeAddressStr = (i) => "0x" + "0".repeat(8 - String(i * 10).length) + i * 10;
  return (
    <Grid className="font-source-code-pro" container direction="row">
      <Grid item xs={12} sm={12} md={12} lg={12}>Length : {hexStr.length}</Grid>
      {lines.map((line, i) => (
        <>
          <Grid item xs={2} sm={2} md={2} lg={2}>{makeAddressStr(i)}</Grid>
          {/* <Grid item xs={8} sm={8} md={6} lg={6}>{line.toUpperCase()}</Grid> */}
          <Grid item xs={8} sm={8} md={7} lg={6}><ChunkHex chunk={line.match(/.{1,2}/g)}/></Grid>
          <Grid item xs={2} sm={2} md={3} lg={4}>{C.hexToAscii(line).replace(/ /g, ".")}</Grid>
        </>
      ))}
      <br/>
      <br/>
    </Grid>
  );
};

export default PacketView;