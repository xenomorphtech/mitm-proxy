import React, { useEffect, useState } from "react";

const WebSockets = (props) => {

  const { href, data, name } = props;

  const [ws, setWs] = useState(new WebSocket(href));

  useEffect(() => {

    ws.onopen = () => {
      console.log("Connected to Server");
    };

    ws.onmessage = (event) => {
      console.log("Message from Server:", event.data);
    };

    setWs(ws);

    // Unmounting the component
    // i.e. closing the connection
    return () => {
      ws.close(1000, name);
    };
  }, []);

  useEffect(() => {
    if (ws.readyState === ws.OPEN) {
      ws.send(data);
    }
  }, [data]);

  return <></>;
};

export default WebSockets;