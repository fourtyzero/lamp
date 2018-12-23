const faker = require('faker');
const _ = require('lodash');

async function initMessage() {
  const users = await User.find();
  const msgs = _.range(0, 100).map(() => ({
    title: faker.lorem.word(),
    digest: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(3),
    // owner: arrayElement(users).id,
  }));
  await Message.createEach(msgs);
  const ms = await Message.find();
  const ps = [];
  ms.forEach((m) => {
    ps.push(
      User.addToCollection(faker.random.arrayElement(users).id, 'messages', [m.id])
    );
  });
  await Promise.all(ps);
}
module.exports = {
  friendlyName: 'Test Message',
  fn: async function() {
    await initMessage();
  },
};
