import React from "react";

import Hue from "@material-ui/core/colors";
import Message from "./Message";


const Chat = (props) => {

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

  const { isGroup, memberCount, messages, currentUser } = props;
  return (
    <>
      {messages.map(messageView)}
    </>
  );
};

export default Chat;