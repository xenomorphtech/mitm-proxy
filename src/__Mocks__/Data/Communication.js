import Faker from "faker";

const generateIdentities = () => {
  const identities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
    const firstname = Faker.name.firstName();
    const lastname = Faker.name.lastName();
    const username = Faker.internet.userName(firstname, lastname);
    const email = Faker.internet.email(firstname, lastname);

    return {
      username,
      firstname,
      lastname,
      email
    };
  });

  return identities;
};

const identities = generateIdentities();

const message = (i) => {
  const identity = identities[Faker.random.number(9)];
  return {
    userDetails: identity,
    contentDetails: {
      content: Faker.lorem.sentence(),
      sentAt: new Date().toISOString().slice(11, -5)
    }
  };
};

const messages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  .map(i => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).flat()
  .map(message);

export default {
  messages
};