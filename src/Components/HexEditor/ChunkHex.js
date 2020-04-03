import React from "react";
import SingleHex from "./SingleHex";

const ChunkHex = ({ chunk, seperator = <></>, quantum }) => chunk.map(v => 
  <>
    {seperator}
    <SingleHex hex={v} />
  </>);

export default ChunkHex;