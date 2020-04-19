import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";

import ChevronRight from "@material-ui/icons/ChevronRight";
import ExpandMore from "@material-ui/icons/ExpandMore";

import Layout from "./../Components/Common/Layout";
import DataInspectorPanel from "./../Components/Panels/DataInspectorPanel";
import ConnectionsPanel from "./../Components/Panels/ConnectionsPanel";

import { USER } from "./../Constants/Roles";
import { data } from "./../__Mocks__/Data/Tree";
import PacketView from "./../Components/PacketsViewer/PacketView";
import TreePanel from "./../Components/Panels/TreePanel";
import WebSockets from "../Components/WebSockets";
import { SERVER_HREF } from "../Constants/Misc";

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

  const { proxy: { packets } } = props;
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
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <ConnectionsPanel />
              <DataInspectorPanel
                hexCode={hexCode}
              />
              <TreePanel
                data={data}
                collapseIcon={<ExpandMore />}
                expandIcon={<ChevronRight />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
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
  hexCode: state.hexCode,
  proxy: state.proxy
});

export default connect(mapStateToProps, {
})(Dashboard);