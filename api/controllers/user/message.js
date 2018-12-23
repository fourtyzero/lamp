module.exports = {
  friendlyName: 'Messages',

  description: 'Messages user.',

  inputs: {
    token: {
      type: 'string',
    },
  },

  exits: {},

  fn: async function({  }, exits) {
    const id = this.req.uid;
    const user = await User.findOne({ id }).populate('messages');

    // All done.
    return  exits.success(user.messages);
  },
};
