const host = process.env.REACT_APP_WSS_HOST || "";
const port = process.env.REACT_APP_WSS_PORT || "";

export const connection = (i) => ({
  connected: false,
  name: "Connection " + i,
  host,
  port,
  live: Boolean(i % 2)
});

export const connections = [1, 2, 3, 4].map(connection);
