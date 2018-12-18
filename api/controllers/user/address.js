module.exports = {
  friendlyName: 'Address',

  description: 'Address user.',

  inputs: {
    id: {
      type: 'string',
    },
  },

  exits: {},

  fn: async function(inputs) {
    const {id} = inputs.id;
    const user = await User.findOne({ id }).populate('addresses');
    // All done.
    return user.addresses;
  },
};
