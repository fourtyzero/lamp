module.exports = {
  friendlyName: 'Address',

  description: 'Address user.',

  inputs: {
    token: {
      type: 'string',
    },
  },

  exits: {},

  fn: async function(inputs,exits) {
    // const {id} = inputs.id;
    const id = this.req.uid;
    const user = await User.findOne({ id }).populate('addresses');
    // All done.
    return exits.success(user.addresses);
  },
};
