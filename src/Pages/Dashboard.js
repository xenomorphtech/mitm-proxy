import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import Layout from "../Components/Layout";
import { data } from "../__Mocks__/Data/Hex";
import { chunk } from "lodash";
import { USER } from "../Constants/Roles";

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
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();

  const quantum = 4;
  const offset = 16;

  const packets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((v) => {
    const len = parseInt((Math.random() * 100) / quantum) * quantum;
    const str = data.hex.split(" ").slice(len, len + len);
    return {
      len,
      str,
      offset,
      quantum
    };
  });

  return (
    <Layout title="Dashboard" role={USER}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          {packets.map((({ len, str, offset, quantum }) => (
            <>
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
            </>
          )))}
        </Typography>
      </main>
    </Layout>
  );
}