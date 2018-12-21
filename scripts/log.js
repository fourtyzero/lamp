module.exports = {
  friendlyName: 'Log',

  description: 'Log something.',
  exits: {
    'bad': {
      description: 'bad token'
    }
  },
  fn: async function() {
    // sails.log('Running custom shell script... (`sails run log`)');
    // sails.log(Object.keys(sails.models));
    // sails.log(sails.models);
    sails.log(sails.models.cartitem.globalId);
    sails.log(sails.models.orderitem.globalId);
    const hash = '$2a$10$NvXPQiI3.mS4mNJ.diCUCe.EAxd1/o9FsUVveZFnfgoIjnU7MTL9C';
    const x = await sails.helpers.passwords.hashPassword('123456');
    sails.log(x);
    sails.log(x === hash);
    const an = '$2a$10$VidgW9aXxq50scFRpq8NaOzGj.IXWvdORW6gvquUrPj6mqc1TzO/6';
    const v = await sails.helpers.passwords.checkPassword('123456', hash)
    .intercept('incorrect', 'bad');
    const v2 = await sails.helpers.passwords.checkPassword('123456', an);
    sails.log(v, v2);
  },
};
