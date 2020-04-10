import React, { useEffect, useRef } from "react";

import { Paper, Box } from "@material-ui/core";

import Message from "./Message";

const Chat = (props) => {
  const paperRef = useRef(null);

  const messageView = (data) => {
    const { username, content, userDetails, sentAt } = data;
    return (
      <Message
        username={username}
        mine={userDetails.id === 786}
        content={content}
        contentDetails={{ sentAt }}
      />
    );
  };

  useEffect(() => {
    paperRef.current.scrollIntoView({ behavior: 'smooth' });
    paperRef.current.scrollTo(0, paperRef.current.scrollHeight);
  },[]);

  const { isGroup, memberCount, messages, currentUser } = props;
  return (
    <Paper ref={paperRef} style={{ height: 'calc(100vh - 88px)', overflow: "scroll" }}>
      <Box p={2}>
        {messages.map(messageView)}
      </Box>
    </Paper>
  );
};

export default Chat;