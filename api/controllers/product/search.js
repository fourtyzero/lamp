module.exports = {
  friendlyName: 'Search',

  description: 'Search product.',

  inputs: {
    kw: {
      type: 'string',
      required: true,
    },
    page: {
      type: 'number',
      defaultsTo: 1,
    },
  },

  exits: {},

  fn: async function({ page, kw }) {
    const count = 10;
    const products = await Product.find({
      where: { title: { contains: kw } },
      limit: count,
      skip: (page - 1) * count,
    });
    // All done.
    return products;
  },
};
