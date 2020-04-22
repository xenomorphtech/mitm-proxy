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
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import WebSockets from '../WebSockets';

const useStyles = makeStyles({
  table: {
    minWidth: 250,
  },
});

const ConnectionsTable = (props) => {
  const { list, onToggle, selectedHexCode, handleEditBtn, handleDeleteBtn } = props;
  const classes = useStyles();

  const handleConnection = ({ connected, live }, i) => () => {
    if (!live) {
      onToggle("connection-" + i)({ target: { checked: !connected } });
    }
  };

  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="connection table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Host</TableCell>
            <TableCell>Port</TableCell>
            <TableCell align="right">Toggle</TableCell>
            <TableCell align="right">Action</TableCell>
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
            <TableRow key={name}>
              <TableCell>
                <Badge color="primary" variant="dot" invisible={live}>
                  {name} &nbsp;
                </Badge>
              </TableCell>
              <TableCell className="font-source-code-pro">{host}</TableCell>
              <TableCell className="font-source-code-pro">{port || "8080"}</TableCell>
              <TableCell align="right">
                <Radio
                  color="primary"
                  checked={connected}
                  onClick={handleConnection({ connected, live }, i)}
                  name={"connection-" + i}
                />
              </TableCell>
              <TableCell align="right">
                <IconButton
                  onClick={handleEditBtn({ name, host, port }, i)}
                  children={<EditIcon />}
                />
                <IconButton
                  onClick={handleDeleteBtn(i)}
                  children={<DeleteIcon />}
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