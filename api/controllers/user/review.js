module.exports = {
  friendlyName: 'Reviews',

  description: 'Reviews user.',

  inputs: {
    // uid: {
    //   type: 'string',
    // },
    page: {
      type: 'number',
      defaultsTo: 1,
    },
  },

  exits: {},

  fn: async function({ page }, exits) {
    const id = this.req.uid;
    const u = await User.findOne({ id }).populate('reviews', {
      limit: 10,
      skip: (page - 1) * 10,
    });
    // All done.
    return exits.success(u.reviews);
  },
};
