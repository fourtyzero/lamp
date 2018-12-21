module.exports = {


  friendlyName: 'Orders',


  description: 'Order user.',


  inputs: {
    uid: {
      type: 'string',

    },
    filter: {

    },
    page: {
      type: 'number',
      defaultsTo: 1
    },
  },


  exits: {

  },


  fn: async function ({uid, page}) {
    const u = await User.findOne({id: uid}).populate('orders',{
      limit: 10,
      skip: (page-1)*10,
      sort: 'createdAt DESC'
    });
    // All done.
    return u.orders;

  }


};
