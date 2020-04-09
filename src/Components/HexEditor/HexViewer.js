import React from "react";
import { chunk } from "lodash";

import { Grid, Typography } from "@material-ui/core";

import ChunkHex from "./ChunkHex";

const HexViewer = (props) => {
  const { len, str, quantum, offset } = props;

  return (
    <Grid item xs={12} sm={8} md={8} lg={8}>
      {/* Length: {len} */}
      <Typography style={{ fontFamily: "Source Code Pro" }}>
        {chunk(str, offset).map((v, i) => (
          <span key={"line-" + i}>
            {chunk(v, quantum).map((e, i) => (
              <ChunkHex
                key={"chunk-" + i}
                chunk={e}
                seperator={<></>}
                quantum={quantum}
              />
            ))}
            <br />
          </span>
        ))}
      </Typography>
    </Grid>
  );
};

export default HexViewer;