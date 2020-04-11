import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Switch } from "@material-ui/core";

import C from "../../Utils/Conversion";
import ChunkHex from "../HexEditor/ChunkHex";

const useStyles = makeStyles({
  table: {
    minWidth: "660px",
  },
  packetsCell: {
    padding: "0px 0px 0px 0px",
    width: "420px",
    maxWidth: "420px",
    minWidth: "420px"
  },
  addressCell: {
    padding: "0px 0px 0px 0px",
    width: "100px",
    maxWidth: "100px",
    minWidth: "100px"
  },
  asciiCell: {
    padding: "0px 0px 0px 0px",
    width: "140px",
    maxWidth: "140px",
    minWidth: "140px"
  }
});

const PacketsTable = (props) => {
  const { list } = props;
  const classes = useStyles();

  const makeAddressStr = (i) => "0x" + "0".repeat(8 - String(i * 10).length) + i * 10;

  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((line, i) => (
            <TableRow key={i}>
              <TableCell align="left" className={classes.addressCell + " font-source-code-pro"}>{makeAddressStr(i)}</TableCell>
              <TableCell align="left" className={classes.packetsCell + " font-source-code-pro"}><ChunkHex chunk={line.match(/.{1,2}/g)}/></TableCell>
              <TableCell align="left" className={classes.asciiCell + " font-source-code-pro"}>{C.hexToAscii(line).replace(/ /g, ".")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PacketsTable;