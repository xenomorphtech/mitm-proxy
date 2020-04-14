import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { packets } from "../__Mocks__/Data/Packets";
import { Box, Grid } from "@material-ui/core";

import Layout from "../Components/Layout";
import DataInspectorPanel from "../Components/Panels/DataInspectorPanel";
import ConnectionsPanel from "../Components/Panels/ConnectionsPanel";

import { USER } from "../Constants/Roles";
import { connections } from "../__Mocks__/Data/Connection";
import PacketView from "../Components/PacketsViewer/PacketView";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
  }
}));

const Dashboard = (props) => {
  const classes = useStyles();

  const { hexCode: { selectedHexCode } } = props;

  const [hexCode, setHexCode] = useState(selectedHexCode);

  useEffect(() => {
    setHexCode(selectedHexCode);
  }, [selectedHexCode]);

  return (
    <Layout title="Dashboard" role={USER} user={{}}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Box>
          <Grid
            container
            direction="row"
            spacing={1}
          >
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <ConnectionsPanel
                connections={connections}
              />
              <DataInspectorPanel
                hexCode={hexCode}
                setHexCode={setHexCode}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={8} lg={8}>
              <PacketView
                packets={packets}
              />
            </Grid>
          </Grid>
        </Box>
      </main>
    </Layout >
  );
};

const mapStateToProps = state => ({
  hexCode: state.hexCode
});

export default connect(mapStateToProps, {

})(Dashboard);