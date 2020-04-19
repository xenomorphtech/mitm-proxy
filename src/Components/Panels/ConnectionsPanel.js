import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import { connect } from "react-redux";

import { Box } from "@material-ui/core";

import Panel from "./../Common/Panel";
import ConnectionsTable from "./../Tables/ConnectionsTable";

import { getConnections, getPackets } from "./../../Redux/Actions/Proxy";

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
    props.getPackets();
    setConnections(updatedConnections);
  };

  return (
    <Panel heading="Connections">
      <Box className="w-100">
        <ConnectionsTable
          list={connections}
          onToggle={onToggle}
          selectedHexCode={selectedHexCode}
        />
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
  getConnections
})(ConnectionsPanel);