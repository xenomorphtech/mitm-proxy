import Faker from "faker";

export const connection = (i) => ({
  connected: false,
  name: "Connection " + i,
  ip: Faker.internet.ip(),
  port: Math.random().toString().slice(2, 6),
  live: Boolean(i % 2)
});

export const connections = [1, 2, 3, 4].map(connection);
