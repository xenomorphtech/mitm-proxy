export const connection = (i) => ({
  connected: false,
  name: "Connection " + i,
  // host: "https://mitm-proxy-wss.herokuapp.com", // Faker.internet.ip(),
  host: process.env.WSS_HOST || "http://localhost",
  port: process.env.WSS_PORT || "8080",
  live: Boolean(i % 2)
});

console.log("ENV", process.env.WSS_HOST, process.env.WSS_PORT);

export const connections = [1, 2, 3, 4].map(connection);
