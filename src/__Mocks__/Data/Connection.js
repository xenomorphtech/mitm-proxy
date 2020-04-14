import Faker from "faker";

export const connection = (i) => ({
  connected: false,
  name: "Connection " + i,
  ip: Faker.internet.ip(),
  port: Math.random().toString().slice(2, 6)
});

export const connections = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(connection);
