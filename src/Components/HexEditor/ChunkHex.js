import React from "react";

import SingleHex from "./SingleHex";

const ChunkHex = ({ chunk, seperator = <></>, quantum }) => chunk.map((v, i) =>
  <span key={"hex-" + i}>
    {seperator}
    <SingleHex hex={v} />
  </span>);

export default ChunkHex;