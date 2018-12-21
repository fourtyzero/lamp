module.exports = {
  friendlyName: 'Create',

  description: 'Create address.',

  inputs: {
    uid: {
      type: 'string',
    },
    address: {
      type: 'json',
    },
  },

  exits: {},

  fn: async function({ uid, address }) {
    const addr = await Address.create({ owner: uid, ...address }).fetch();
    // All done.
    return addr;
  },
};
