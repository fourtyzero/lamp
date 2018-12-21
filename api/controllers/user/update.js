module.exports = {
  friendlyName: 'Update',

  description: 'Update user.',

  inputs: {
    uid: {
      type: 'string',
    },
    field: {
      type: 'string',
    },
    value: {
      type: 'string',
    },
  },

  exits: {},

  fn: async function({ uid, field, value }, exits) {
    // All done.
    const user = await User.findOne({ id: uid });
    if (user) {
      await User.updateOne({ id: uid }).set({ field: value });
    }
    return exits.success();
  },
};
