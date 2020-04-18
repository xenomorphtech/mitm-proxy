import React from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Switch, Paper } from "@material-ui/core";

import C from "../../Utils/Conversion";
import ChunkHex from "../HexEditor/ChunkHex";
import AsciiView from '../PacketsViewer/AsciiView';


const PacketsTable = (props) => {
  const { list, side } = props;

  const makeAddressStr = (i) => "0x" + "0".repeat(8 - String(i * 10).length) + i * 10;

  return (
    <Paper elevation={0} variant="outlined">
      <TableContainer style={{ width: "unset" }}>
        <Table size="small" aria-label="packets table">
          <TableHead>
            <TableRow>
              <TableCell style={{ padding: "0px 0px 0px 0px" }}></TableCell>
              <TableCell style={{ padding: "0px 0px 0px 0px" }}></TableCell>
              <TableCell style={{ padding: "0px 0px 0px 0px" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((line, i) => (
              <TableRow key={i} className={side === "LEFT" ? "red" : "blue"}>
                <TableCell align="left" className="address-cell font-source-code-pro">
                  {makeAddressStr(i)}
                </TableCell>
                <TableCell align="left" className="packets-cell font-source-code-pro">
                  <ChunkHex chunk={line.match(/.{1,2}/g)} />
                </TableCell>
                <TableCell align="left" className="ascii-cell font-source-code-pro">
                  <AsciiView ascii={C.replaceNonAscii(C.hexToAscii(line))} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default PacketsTable;