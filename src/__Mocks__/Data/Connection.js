const connection = (i) => ({
  connected: false,
  name: "Connection " + i
});

const connections = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(connection);

module.exports = {
  connection,
  connections
};