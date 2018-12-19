module.exports = {
  friendlyName: 'Get',

  description: 'Get product.',

  inputs: {
    sortBy: {
      type: 'string',
      isIn: ['sales', 'createdAt', 'price'],
    },
    sortOrder: {
      type: 'number',
    },
    filters: {
      type: 'json',
    },
    page: {
      type: 'number',
    },
  },

  exits: {},

  fn: async function(inputs) {
    const { filters, page = 1, sortBy = 'sales', sortOrder } = inputs;
    const order = sortOrder === 1 ? 'ASC' : 'DESC';
    const products = await Product.find({
      where: {},
      limit: 12,
      skip: 12 * (page - 1),
      sort: `${sortBy} ${order}`,
    });
    // All done.
    return;
  },
};
