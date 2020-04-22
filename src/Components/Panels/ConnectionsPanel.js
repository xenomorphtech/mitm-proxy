import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import { connect } from "react-redux";

import { Box, Button, Grid } from "@material-ui/core";

import Panel from "./../Common/Panel";
import ConnectionsTable from "./../Tables/ConnectionsTable";

import { getConnections, getPackets, resetPackets } from "./../../Redux/Actions/Proxy";
import ConnectionModal from "../Modals/ConnectionModal";
import { makeConnectionWithQueries } from "../../Utils/Helper";

const ConnectionsPanel = (props) => {
  const { hexCode: { selectedHexCode } } = props;

  const [queries, setQueries] = useState({});
  const [index, setIndex] = useState(-1);
  const [connections, setConnections] = useState(props.connections);
  const [open, setOpen] = useState(false);

  const handleNewConnection = () => {
    setIndex(-1);
    setOpen(true);
  };

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

  const handleEditBtn = (queries, index) => () => {
    setIndex(index);
    setQueries(queries);
    setOpen(true);
  };

  const handleDeleteBtn = (index) => () => {
    let newConnections = [...connections];
    newConnections = [...newConnections.slice(0, index), ...newConnections.slice(index + 1)];

    setConnections(newConnections);
    setQueries({});
  };

  const handleSaveConnection = (queries) => {
    const newConnections = [...connections];
    const connection = makeConnectionWithQueries(queries);
    newConnections.push(connection);

    setConnections(newConnections);
    setQueries({});
  };

  const handleEditConnection = (queries, index) => {
    const newConnections = [...connections];
    Object.entries(queries).forEach(([key, value]) => {
      newConnections[index][key] = value;
    });

    setConnections(newConnections);
    setQueries({});
  }

  const disabled = connections.every(({ connected }) => connected === false);

  return (
    <Panel expanded={true} heading="Connections">
      <Box className="w-100">
        {connections.length ? <>
          <ConnectionsTable
            list={connections}
            onToggle={onToggle}
            selectedHexCode={selectedHexCode}
            handleEditBtn={handleEditBtn}
            handleDeleteBtn={handleDeleteBtn}
          />
          <br />
          <Grid
            container
            direction="row"
            spacing={2}
          >
            <Grid item xs={6}>
              <Button
                className="w-100"
                variant="contained"
                onClick={handleNewConnection}
                color="secondary"
              >
                NEW CONNECTION
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                className="w-100"
                variant="contained"
                disabled={disabled}
                onClick={handleDisconnect}
                color="primary"
              >
                DISCONNECT
              </Button>
            </Grid>
          </Grid>
        </> : <>
            <Button
              className="w-100"
              variant="contained"
              onClick={handleNewConnection}
              color="secondary"
            >
              NEW CONNECTION
            </Button>
          </>}
      </Box>
      <ConnectionModal
        open={open}
        setOpen={setOpen}
        index={index}
        queries={queries}
        handleSaveConnection={handleSaveConnection}
        handleEditConnection={handleEditConnection}
      />
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