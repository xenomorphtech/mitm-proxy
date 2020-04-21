export const connection = (i) => ({
  connected: false,
  name: "Connection " + i,
  // host: "https://mitm-proxy-wss.herokuapp.com", // Faker.internet.ip(),
  host: "http://localhost",
  port: "8080",
  live: Boolean(i % 2)
});

export const connections = [1, 2, 3, 4].map(connection);
