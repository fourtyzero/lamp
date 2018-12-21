module.exports = {
  friendlyName: 'Update',

  description: 'Update address.',

  inputs: {
    uid: {
      type: 'string',
    },
    aid: {
      type: 'string',
    },
    updates: {
      type: 'json',
    },
  },

  exits: {},

  fn: async function({ uid, aid, updates }) {
    const addr = await Address.updateOne({ id: aid }).set(updates);
    // All done.
    return addr;
  },
};
