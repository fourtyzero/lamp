module.exports = {
  friendlyName: 'Product',

  description: 'Product tag.',

  inputs: {
    tid: {
      type: 'string',
    },
    page: {
      type: 'number',
      defaultsTo: 1,
    },

  },

  exits: {},

  fn: async function({ tid, page }) {
    // All done.
    const count = 10;
    const ps = await Product.find({
      where: {tag: tid},
      limit: count,
      skip: (page-1) * count,
    });
    return ps;
  },
};
