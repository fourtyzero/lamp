module.exports = {
  friendlyName: 'Alter',

  description: 'Alter cart.',

  inputs: {
    cid: {
      type: 'string',
    },
    pid: {
      type: 'string',
    },
    delta: {
      type: 'number',
    },
  },

  exits: {},

  fn: async function({ cid, pid, delta }) {
    const item = await CartItem.findOne({ belongsTo: cid, product: pid });
    if (item) {
      await CartItem.updateOne({ id: item.id }).set({
        quantity: item.quantity + delta,
      });
    }
    // All done.
    return;
  },
};
