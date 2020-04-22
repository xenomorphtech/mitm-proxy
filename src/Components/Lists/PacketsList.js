import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import PacketsTable from "../Tables/PacketsTable";
import Virtualized from "../Common/Virtualized";

const makeListFromPackets = (packets, quantum = 4, offset = 16, lineHeight = 21) => {
  return packets.map(str => {
    const lines = str.match(/.{1,32}/g) || [];
    const size = 16 + (lines.length * lineHeight);
    return { len: str.length, lines, offset, quantum, size };
  });
};

const PacketsList = (props) => {
  const { packets } = props;

  const [list, setList] = useState([]);

  useEffect(() => {
    const list = makeListFromPackets(packets);
    setList(list);
  }, [packets]);

  const getRowHeight = ({ index }) => list[index].size;

  const rowRenderer = ({ index, key, style }) => (
    <Box p={1} key={key} style={style} className="packet">
      <Grid
        container
        direction="row"
      >
        {index % 2 ? <div style={{ flexGrow: 1 }}></div> : <></>}
        <PacketsTable side={index % 2 ? "RIGHT" : "LEFT"} list={list[index].lines} />
      </Grid>
    </Box>
  );

  const noOfPackets = packets.length;

  return (
    <Virtualized
      dataArray={list}
      useDynamicRowHeight={true}
      rowRenderer={rowRenderer}
      getRowHeight={getRowHeight}
      overscan={10}
      scrollToIndex={noOfPackets - 1}
    />
  );
};

export default PacketsList;