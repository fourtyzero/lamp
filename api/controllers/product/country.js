module.exports = {
  friendlyName: 'Country',

  description: 'Country product.',

  inputs: {
    country: {
      type: 'string',
    },
    page: {
      type: 'number',
    },
  },

  exits: {},

  fn: async function(inputs) {
    const count = 12;
    // All done.
    const { country, page = 1 } = inputs;
    const products = await Product.find({
      where: {},
      limit: count,
      skip: 12 * (page - 1),
    });
    return;
  },
};
