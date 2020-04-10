import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Switch } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 250,
  },
});

const ConnectionsTable = (props) => {
  const { list, onToggle } = props;
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>IP Address</TableCell>
            <TableCell>Port</TableCell>
            <TableCell align="right">Toggle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((connection, i) => (
            <TableRow key={connection.name}>
              <TableCell component="th" scope="row">
                {connection.name}
              </TableCell>
              <TableCell className="font-source-code-pro">{connection.ip}</TableCell>
              <TableCell className="font-source-code-pro">{connection.port}</TableCell>
              <TableCell align="right">
                <Switch
                  checked={connection.connected}
                  onChange={onToggle("connection-" + i)}
                  name={"connection-" + i}
                  color="primary"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ConnectionsTable;