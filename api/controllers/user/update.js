module.exports = {
  friendlyName: 'Update',

  description: 'Update user.',

  inputs: {
    uid: {
      type: 'string',
    },
    field: {
      type: 'string'
    },
    value: {
      type: 'string'
    }
  },

  exits: {},

  fn: async function({ uid, field, value }) {
    // All done.
    const user = await User.findOne({id: uid});
    if(user) {
      await User.
    }
    return;
  },
};
