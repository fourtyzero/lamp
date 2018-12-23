module.exports = {
  friendlyName: 'Orders',

  description: 'Order user.',

  inputs: {
    token: {
      type: 'string',
    },
    page: {
      type: 'number',
      defaultsTo: 1,
    },
    filter: {
      type: 'string',
      isIn: ['toPay', 'closed', 'finished', 'cancelled', 'toShip', 'toConfirm'],
    },
  },

  exits: {
    badToken: {
      responseType: 'unauthorized',
    },
  },

  fn: async function({  page, filter }, exits) {
    // const { id } = await sails.helpers.verify(token);
    // if (!id) {
    //   return exits.badToken();
    // }
    const id = this.req.uid;
    const u = await User.findOne({ id }).populate('orders', {
      limit: 10,
      skip: (page - 1) * 10,
      sort: 'createdAt DESC',
      where: filter ? { status: filter } : {},
    });
    // All done.
    return exits.success(u.orders);
  },
};
