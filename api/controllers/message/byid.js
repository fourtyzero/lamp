module.exports = {
  friendlyName: 'Byid',

  description: 'Byid message.',

  inputs: {
    id: {
      type: 'string',
    },
  },

  exits: {},

  fn: async function({ id }, exits) {
    const msg = await Message.findOne({ id });
    // All done.
    return exits.success(msg);
  },
};
