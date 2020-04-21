import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";

import { Paper } from "@material-ui/core";

import { setPackets } from "../../Redux/Actions/Proxy";

import PacketNotes from "./../Modals/PacketNotes";
import PacketsList from "../Lists/PacketsList";

const PacketView = (props) => {
  const { packets, packet, setPackets } = props;

  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if(!isEmpty(packet)){
      const newPackets = [...packets, packet];
      setPackets(newPackets);
    }
  },[packet]);

  return <>
    <Paper style={{ height: window.innerHeight - 88, overflow: "scroll" }}>
      <PacketsList packets={packets} />
    </Paper>
    <PacketNotes
      open={open}
      setOpen={setOpen}
      notes={notes}
      setNotes={setNotes}
    />
  </>;
};

const mapStateToProps = state => ({
  packet: state.socket.data
});

export default connect(mapStateToProps, {
  setPackets
})(PacketView);