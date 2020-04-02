import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import Layout from "../Components/Layout";
import { data } from "../__Mocks__/Data/Hex";
import { chunk } from "lodash";
import { USER } from "../Constants/Roles";
import { Box, Grid } from "@material-ui/core";

import { ascii_to_hex, str_to_hex_chunks } from "../Utils/Conversion";

import RecyclerView from "../Components/RecyclerView";

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

export default function MiniDrawer() {
  const classes = useStyles();

  const quantum = 4;
  const offset = 16;

  const hexStr = ascii_to_hex(data.ascii) || data.hex.replace(/ /g, "");

  const packets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    .map(v => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).flat()
    .map(v => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).flat()
    .map(v => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).flat().map((v) => {
    const len = parseInt((Math.random() * 100) / quantum) * quantum;
    const str = str_to_hex_chunks(hexStr.slice(len, len + len));
    return {
      len,
      str,
      offset,
      quantum
    };
  });

  const dataList = [...packets];

  const view = ({ len, str, quantum, offset}) => (
    <Grid item xs={12} sm={8} md={8} lg={8}>
      Length: {len}
      <Typography style={{ fontFamily: "fira code" }}>
        {chunk(str, offset).map((v) => (
          <>
            {chunk(v, quantum).map((e) => (
              <>&nbsp; &nbsp; {e.join(" ").toUpperCase()}</>
            ))}
            <br />
          </>
        ))}
      </Typography>
    </Grid>
  );

  return (
    <Layout title="Dashboard" role={USER}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Box>
          <RecyclerView
            dataList={dataList}
            view={view}
          />
        </Box>
      </main>
    </Layout >
  );
}