import React, { useState, useEffect } from "react";

import { Box } from "@material-ui/core";

import Panel from "../Panel";
import ConnectionsTable from "../Tables/ConnectionsTable";
import { getConnections, getPackets } from "../../Redux/Actions/Proxy";
import { connect } from "react-redux";

const ConnectionsPanel = (props) => {
  const [connections, setConnections] = useState(props.connections);

  useEffect(() => {
    props.getConnections();
  }, []);

  useEffect(() => {
    setConnections(props.connections);
  },[props.connections]);

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
    setConnections(updatedConnections);
  };

  useEffect(() => {
    props.getPackets();
  }, [connections]);

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

const mapStateToProps = (state) => ({
  connections: state.proxy.connections
});

export default connect(mapStateToProps, {
  getPackets,
  getConnections
})(ConnectionsPanel);