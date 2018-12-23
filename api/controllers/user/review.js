module.exports = {
  friendlyName: 'Reviews',

  description: 'Reviews user.',

  inputs: {
    // uid: {
    //   type: 'string',
    // },
  },

  exits: {},

  fn: async function({ }, exits) {
    const id = this.req.uid;
    const u = await User.findOne({ id }).populate('reviews');
    // All done.
    return exits.success(u.reviews);
  },
};
