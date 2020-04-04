import React from  "react";
import { chunk } from "lodash";
import { Grid, Typography } from "@material-ui/core";
import ChunkHex from "./ChunkHex";

const HexViewer = (props) => {
  const { len, str, quantum, offset } = props;

  return (
    <Grid item xs={12} sm={8} md={8} lg={8}>
      Length: {len}
      <Typography style={{ fontFamily: "fira code" }}>
        {chunk(str, offset).map((v) => (
          <>
            {chunk(v, quantum).map((e) => (
              <ChunkHex
                chunk={e}
                seperator={<>&nbsp;</>}
                quantum={quantum}
              />
            ))}
            <br />
          </>
        ))}
      </Typography>
    </Grid>
  );
};

export default HexViewer;