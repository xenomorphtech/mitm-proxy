import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { data } from "../__Mocks__/Data/Hex";
import { Box, Grid, Paper, Typography } from "@material-ui/core";

import Layout from "../Components/Layout";
import PacketView from "../Components/PacketsViewer/PacketView";
import DataInspectorPanel from "../Components/Panels/DataInspectorPanel";
import ConnectionsPanel from "../Components/Panels/ConnectionsPanel";

import PacketsTable from "../Components/Tables/PacketsTable";

import { USER } from "../Constants/Roles";
import { connections } from "../__Mocks__/Data/Connection";

const useStyles = makeStyles((theme) => ({
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

const quantum = 4;
const offset = 16;

// const hexStr = C.asciiToHex(data.ascii) || data.hex.replace(/ /g, "");
const hexStr = data.hex.replace(/[ \n]/g, "");

const packets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  // .map(v => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).flat()
  .map(v => [1]).flat().map((v) => {
    const len = parseInt((Math.random() * 256) / quantum) * quantum;
    // const str = C.strToHexChunks(hexStr.slice(len, len + len));
    const str = hexStr.slice(len, len + len);
    return { len, str, offset, quantum };
  });

const Dashboard = (props) => {
  const classes = useStyles();

  const { hexCode: { selectedHexCode } } = props;

  const [hexCode, setHexCode] = useState(selectedHexCode);

  useEffect(() => {
    setHexCode(selectedHexCode);
  }, [selectedHexCode]);

  return (
    <Layout title="Dashboard" role={USER}>
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
              <Paper style={{ height: 'calc(100vh - 88px)', overflow: "scroll" }}>
                <Box p={2}>
                  {/* {packets.map(({ str }) => <PacketView hexStr={str} />)} */}
                  {packets.map(({ len, str }) => <>
                    <Typography variant="caption">Packet size : {len}</Typography>
                    <PacketsTable list={str.match(/.{1,32}/g)} />
                    <br />
                    <br />
                  </>)}

                </Box>
              </Paper>
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