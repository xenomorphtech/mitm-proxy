import React, { useState } from "react";
import Faker from "faker";

import { Box, FormControlLabel, Switch, Typography } from "@material-ui/core";

import Panel from "../Panel";
import ConnectionsTable from "../Tables/ConnectionsTable";

const ConnectionsPanel = (props) => {
  const [connections, setConnections] = useState(props.connections || []);

  const onToggle = (name) => ({ target: { checked } }) => {
    const updatedConnections = [...connections];
    updatedConnections.forEach((connection, i) => {
      if ("connection-" + i === name) {
        connection.connected = checked;
      }
    });
    setConnections(updatedConnections);
  };

  return (
    <Panel heading="Connections">
      <Box className="w-100">
        <ConnectionsTable
          list={connections}
          onToggle={onToggle}
        />
      </Box>
    </Panel>
  );
};

export default ConnectionsPanel;