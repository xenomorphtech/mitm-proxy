import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Radio from "@material-ui/core/Radio";
import Badge from "@material-ui/core/Badge";
import WebSockets from '../WebSockets';

const useStyles = makeStyles({
  table: {
    minWidth: 250,
  },
});

const ConnectionsTable = (props) => {
  const { list, onToggle, selectedHexCode } = props;
  const classes = useStyles();

  const onClickRow = ({ connected, live }, i) => () => {
    if (!live) {
      onToggle("connection-" + i)({ target: { checked: !connected } });
    }
  };

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="connection table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Host</TableCell>
            <TableCell>Port</TableCell>
            <TableCell align="right">Toggle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(({ connected, name, host, port, live }, i) => <>
            {connected ?
              <WebSockets
                name={name}
                data={selectedHexCode}
                connected={connected}
                host={host}
                port={port}
              /> : <></>
            }
            <TableRow className="pointer" key={name} onClick={onClickRow({ connected, live }, i)}>
              <TableCell>
                <Badge color="primary" variant="dot" invisible={live}>
                  {name} &nbsp;
                </Badge>
              </TableCell>
              <TableCell className="font-source-code-pro">{host}</TableCell>
              <TableCell className="font-source-code-pro">{port}</TableCell>
              <TableCell align="right">
                <Radio
                  checked={connected}
                  name={"connection-" + i}
                  color="primary"
                />
              </TableCell>
            </TableRow>
          </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ConnectionsTable;