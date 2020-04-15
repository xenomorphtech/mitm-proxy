import React, { useState } from "react";

import { Notes } from "@material-ui/icons";
import { Box, Grid, Paper, Typography, IconButton } from "@material-ui/core";

import PacketNotes from "../Modals/PacketNotes";
import PacketsTable from "../Tables/PacketsTable";
import Virtualized from "../Virtualized";

const PacketView = (props) => {
  const { packets } = props;

  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState("");

  // const onClickNotes = (i) => () => {
  //   setOpen(true);
  // };

  const getRowHeight = ({ index }) => packets[index].size;

  const rowRenderer = ({ index, key, style }) => (
    <Box p={2} key={key} style={style} className="packet">
      {/* <Grid
        container
        direction="row"
        alignItems="center"
      >
        <Typography variant="caption">Packet size : {packets[index].len}</Typography>
        <div style={{ flexGrow: 1 }}></div>
        <IconButton onClick={onClickNotes(index)}><Notes /></IconButton>
      </Grid> */}
      <Grid
        container
        direction="row"
      >
        {index % 2 ? <div style={{ flexGrow: 1 }}></div> : <></>}
        <PacketsTable list={packets[index].lines} />
      </Grid>
      {/* <br /> */}
      {/* <br /> */}
    </Box>
  );

  const noOfPackets = packets.length;

  return <>
    <Paper style={{ height: window.innerHeight - 88, overflow: "scroll" }}>
      <Virtualized
        dataArray={packets}
        useDynamicRowHeight={true}
        rowRenderer={rowRenderer}
        getRowHeight={getRowHeight}
        overscan={10}
        scrollToIndex={noOfPackets - 1}
      />
    </Paper>
    <PacketNotes
      open={open}
      setOpen={setOpen}
      notes={notes}
      setNotes={setNotes}
    />
  </>;
};

export default PacketView;