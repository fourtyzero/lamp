module.exports = {
  friendlyName: 'Reviews',

  description: 'Reviews product.',

  inputs: {
    pid: {
      type: 'string',
    },
  },

  exits: {},

  fn: async function({ pid }) {
    const p = await Product.findOne({ id: pid }).populate('reviews');
    // All done.
    return p.reviews;
    // All done.
  },
};
