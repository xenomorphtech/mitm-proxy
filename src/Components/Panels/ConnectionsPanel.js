import React, { useState } from "react";
import Panel from "../Panel";
import { Box, FormControlLabel, Switch } from "@material-ui/core";

const ConnectionsPanel = (props) => {
  const [connections, setConnections] = useState(props.connections || []);

  const handleChange = (name) => ({ target: { checked } }) => {
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
        {connections.map(({ connected, name }, i) => (
          <>
            <FormControlLabel
              control={
                <Switch
                  checked={connected}
                  onChange={handleChange("connection-" + i)}
                  name={"connection-" + i}
                  color="primary"
                />
              }
              label={name}
            />
            <br />
          </>
        ))}
      </Box>
    </Panel>
  );
};

export default ConnectionsPanel;