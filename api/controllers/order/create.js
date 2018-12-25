module.exports = {
  friendlyName: 'Create',

  description: 'Create order.',

  inputs: {
    items: {
      type: 'json'
    }
  },

  exits: {},

  fn: async function({items}, exits) {
    const { uid } = this.req;
    const orderItems = items.map();
    const order = Order.create
    // All done.
    return;
  },
};
