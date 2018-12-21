module.exports = {


  friendlyName: 'Clear',


  description: 'Clear cart.',


  inputs: {
    cid: {
      type: 'string'
    }
  },


  exits: {

  },


  fn: async function ({cid}) {
    const cart = await Cart.updateOne({id: cid})
    .set({items: []});
    // All done.
    return cart;

  }


};
