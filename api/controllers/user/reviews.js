module.exports = {
  friendlyName: 'Reviews',

  description: 'Reviews user.',

  inputs: {
    uid: {
      type: 'string',
    },
  },

  exits: {},

  fn: async function({ uid }) {
    const u = await User.findOne({ id: uid }).populate('reviews');
    // All done.
    return u.reviews;
  },
};
