import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import { connect } from "react-redux";

import { Box, Button, Typography } from "@material-ui/core";

import Panel from "./../Common/Panel";
import ConnectionsTable from "./../Tables/ConnectionsTable";

import { getConnections, getPackets, resetPackets } from "./../../Redux/Actions/Proxy";

const ConnectionsPanel = (props) => {
  const { hexCode: { selectedHexCode } } = props;
  const [connections, setConnections] = useState(props.connections);

  useEffect(() => {
    if (isEmpty(connections)) {
      props.getConnections();
    }
  }, []);

  useEffect(() => {
    setConnections(props.connections);
  }, [props.connections]);

  const handleDisconnect = () => {
    const updatedConnections = [...connections];
    updatedConnections.forEach((connection, i) => {
      connection.connected = false;
    });
    setConnections(updatedConnections);
  }

  const onToggle = (name) => (event) => {
    const { target: { checked } } = event;
    const updatedConnections = [...connections];
    updatedConnections.forEach((connection, i) => {
      if ("connection-" + i === name) {
        connection.connected = checked;
      } else {
        connection.connected = false;
      }
    });
    props.resetPackets();
    setConnections(updatedConnections);
  };

  return (
    <Panel expanded={true} heading="Connections">
      <Box className="w-100">
        {connections.length ? <>
          <ConnectionsTable
            list={connections}
            onToggle={onToggle}
            selectedHexCode={selectedHexCode}
          />
          <br />
          <Button
            className="w-100"
            variant="contained"
            disabled={connections.every(({ connected }) => connected === false)}
            onClick={handleDisconnect}
            color="primary"
          >
            Disconnect
          </Button>
        </> : <>
        <Typography>
          No Connections
        </Typography>
          </>}
      </Box>
    </Panel>
  );
};

const mapStateToProps = (state) => ({
  connections: state.proxy.connections,
  hexCode: state.hexCode
});

export default connect(mapStateToProps, {
  getPackets,
  resetPackets,
  getConnections
})(ConnectionsPanel);