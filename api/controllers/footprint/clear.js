module.exports = {
  friendlyName: 'Clear',

  description: 'Clear footprint.',

  inputs: {
    uid: {
      type: 'string',
    },
  },

  exits: {},

  fn: async function({ uid }) {
    await Footprint.destroy({ owner: uid });
    // All done.
    return this.res.ok();
  },
};
