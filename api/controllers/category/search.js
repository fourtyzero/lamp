module.exports = {
  friendlyName: 'Search',

  description: 'Search products in a category by specified order',

  inputs: {
    category: {
      type: 'string',
      required: true,
    },
    sort: {
      type: 'string',
      isIn: ['date', 'sales', 'price'],
      required: true,
    },
    order: {
      type: 'number',
      isIn: [1, -1],
      defaultsTo: 1,
    },
    page: {
      type: 'number',
      defaultsTo: 1,
    },
    filters: {
      type: 'json',
    },
  },

  exits: {},

  fn: async function({ category, sort, order, page, filters }) {
    const count = 10;
    const by = order === 1 ? 'ASC' : 'DESC';
    const map = { date: 'createdAt', price: 'price', sales: 'sales' };
    const key = map[sort];
    const { countries, tags, groups } = filters;
    const products = await Product.find({
      where: {
        category: category,
        country: { in: countries },
        tag: { in: tags },
        group: { in: groups },
      },
      limit: count,
      sort: `${key} ${by}`,
      skip: (page - 1) * count,
    });
    // All done.
    return products;
  },
};
