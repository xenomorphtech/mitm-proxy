import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { flow } from "lodash";

import Layout from "../Components/Layout";
import { data } from "../__Mocks__/Data/Hex";
import { USER } from "../Constants/Roles";
import { Box } from "@material-ui/core";

import C from "../Utils/Conversion";

import RecyclerView from "../Components/RecyclerView";
import HexViewer from "../Components/HexEditor/HexViewer";
import BinaryView from "../Components/HexEditor/BinaryView";

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
    padding: theme.spacing(3),
  }
}));

const Dashboard = (props) => {
  const classes = useStyles();

  const [ hexCode, setHexCode ] = useState("FF");

  const quantum = 4;
  const offset = 16;

  const hexStr = C.asciiToHex(data.ascii) || data.hex.replace(/ /g, "");

  const packets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    .map(v => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).flat()
    .map(v => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).flat()
    .map(v => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).flat().map((v) => {
    const len = parseInt((Math.random() * 100) / quantum) * quantum;
    const str = C.strToHexChunks(hexStr.slice(len, len + len));
    return {
      len,
      str,
      offset,
      quantum
    };
  });

  // setBinValues( flow([C.hexToBinary, C.binStrToBinArr])(hexCode) );

  const dataList = [...packets];

  const view = (props) => <HexViewer {...props} />;

  return (
    <Layout title="Dashboard" role={USER}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Box>
          <BinaryView 
            hexCode={hexCode}
            setHexCode={setHexCode}
            // values={binValues}
            // setValues={setValues}
          />
          {hexCode}
          <RecyclerView
            dataList={dataList}
            view={view}
          />
        </Box>
      </main>
    </Layout >
  );
};

export default Dashboard;