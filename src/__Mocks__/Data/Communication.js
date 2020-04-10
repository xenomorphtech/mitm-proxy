import Faker from "faker";

const message = (i) => ({
  userDetails: { id: i % 10 && i % 5 === 0 ? 786 : 123 },
  username: Faker.internet.userName(),
  content: Faker.lorem.sentence(),
  sentAt: new Date().toISOString().slice(11,-5)
});

const messages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  .map(i => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).flat()
  .map(message);

export default {
  messages
};