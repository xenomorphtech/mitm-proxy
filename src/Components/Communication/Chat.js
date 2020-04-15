import React, { useEffect, useRef } from "react";
import Faker from "faker";

import { Paper, Box } from "@material-ui/core";

import Message from "./Message";

const Chat = (props) => {
  const paperRef = useRef(null);

  const { messages, currentUser } = props;

  const messageView = (data) => {
    const { contentDetails, userDetails } = data;
    return (
      <Message
        userDetails={userDetails}
        mine={userDetails.username === currentUser}
        contentDetails={contentDetails}
      />
    );
  };

  useEffect(() => {
    paperRef.current.scrollIntoView({ behavior: "smooth" });
    paperRef.current.scrollTo(0, paperRef.current.scrollHeight);
  }, []);


  return (
    <Paper ref={paperRef} style={{ height: window.innerHeight - 88, overflow: "scroll" }}>
      <Box p={2}>
        {messages.map(messageView)}
      </Box>
    </Paper>
  );
};

export default Chat;