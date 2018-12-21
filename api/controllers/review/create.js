module.exports = {
  friendlyName: 'Create',

  description: 'Create review.',

  inputs: {
    uid: {
      type: 'string',
    },
    entity: {
      type: 'json',
    },
  },

  exits: {},

  fn: async function({ uid, entity }) {
    await Review.create({ id: uid, ...entity });
    // All done.
    return this.res.ok();
  },
};
