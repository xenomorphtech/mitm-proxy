import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { setSocketData } from "./../Redux/Actions/Socket";

const WebSockets = (props) => {

  const { setSocketData } = props;
  const { host, port, data, name } = props;

  const href = `${host.replace(/^http/, "ws")}:${port}`;

  const [ws, setWs] = useState(new WebSocket(href));

  useEffect(() => {

    // Capturing Connection Event
    ws.onopen = () => {
      console.log("Connected to Server");
    };

    // Capturing Message Event
    ws.onmessage = (event) => {
      console.log("Message from Server:", event.data);
      setSocketData(event.data);
    };

    setWs(ws);

    // Unmounting the component
    // i.e. closing the connection
    return () => {
      ws.close(1000, name);
    };
  }, []);

  // Watches for Data change, if connected then sends data
  // Sending Data to Server
  useEffect(() => {
    if (ws.readyState === ws.OPEN) {
      ws.send(data);
    }
  }, [data]);

  return <></>;
};

const mapStateToProps = _state => ({});

export default connect(mapStateToProps, {
  setSocketData
})(WebSockets);