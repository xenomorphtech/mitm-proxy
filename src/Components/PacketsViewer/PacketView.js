import React, { useState } from "react";

import { Notes } from "@material-ui/icons";
import { Box, Grid, Paper, Typography, IconButton, makeStyles } from "@material-ui/core";

import PacketNotes from "../Modals/PacketNotes";
import PacketsTable from "../Tables/PacketsTable";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  packet: {
    transition: "background 0.150s ease-in-out",
    "&:hover": {
      background: theme.palette.type === "dark" ? "#FFFFFF09" : "#00000009"
    }
  }
}));

const PacketView = (props) => {
  const classes = useStyles();
  const { packets } = props;

  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState("");

  const onClickNotes = (i) => () => {
    setOpen(true);
  };

  return <>
    <Paper style={{ height: 'calc(100vh - 88px)', overflow: "scroll" }}>
      {packets.map(({ len, str }, i) => (
        <Box p={2} className={classes.packet}>
          <Grid
            container
            direction="row"
            alignItems="center"
          >
            <Typography variant="caption">Packet size : {len}</Typography>
            <div className={classes.grow}></div>
            <IconButton onClick={onClickNotes(i)}><Notes /></IconButton>
          </Grid>
          <PacketsTable list={str.match(/.{1,32}/g) || []} />
          <br />
          <br />
        </Box>
      ))}
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