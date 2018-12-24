module.exports = {
  friendlyName: 'Create',

  description: 'Create address.',

  inputs: {
    address: {
      type: 'json',
    },
  },

  exits: {},

  fn: async function({ address }) {
    const id = this.req.uid;
    const addr = await Address.create({ owner: id, ...address }).fetch();
    // All done.
    return addr;
  },
};
