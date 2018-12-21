module.exports = {
  friendlyName: 'Messages',

  description: 'Messages user.',

  inputs: {
    uid: {
      type: 'string',
    },
  },

  exits: {},

  fn: async function({ uid }) {
    const user = await User.findOne({ uid }).populate('messages');

    // All done.
    return user.messages;
  },
};
