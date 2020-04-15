import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Switch, Paper } from "@material-ui/core";

import C from "../../Utils/Conversion";
import ChunkHex from "../HexEditor/ChunkHex";
import AsciiView from '../PacketsViewer/AsciiView';

// const useStyles = makeStyles({
//   table: {
//     width: "660px",
//     minWidth: "660px",
//     maxWidth: "660px",
//   },
//   packetsCell: {
//     flexGrow: 0,
//     padding: "0px 0px 0px 0px",
//     width: "420px",
//     maxWidth: "420px",
//     minWidth: "420px"
//   },
//   addressCell: {
//     flexGrow: 0,
//     padding: "0px 12px 0px 0px",
//     width: "100px",
//     maxWidth: "100px",
//     minWidth: "100px"
//   },
//   asciiCell: {
//     flexGrow: 0,
//     padding: "0px 0px 0px 0px",
//     width: "152px",
//     maxWidth: "152px",
//     minWidth: "152px"
//   }
// });

const PacketsTable = (props) => {
  const { list } = props;
  // const classes = useStyles();

  const makeAddressStr = (i) => "0x" + "0".repeat(8 - String(i * 10).length) + i * 10;

  return (
    <Paper elevation={2}>
      <TableContainer style={{ width: "unset" }}>
        <Table size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ padding: "0px 0px 0px 0px" }}></TableCell>
              <TableCell style={{ padding: "0px 0px 0px 0px" }}></TableCell>
              <TableCell style={{ padding: "0px 0px 0px 0px" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((line, i) => (
              <TableRow key={i}>
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