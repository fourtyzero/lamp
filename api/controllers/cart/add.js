module.exports = {
  friendlyName: 'Add',

  description: 'Add cart.',

  inputs: {
    uid: {
      type: 'string',
    },
    cid: {
      type: 'string',
    },
    pid: {
      type: 'string',
    },
  },

  exits: {},

  fn: async function({ cid, pid }) {
    await CartItem.create({ belongsTo: cid, product: pid, quantity: 0, });
    // All done.
    return this.res.ok();
  },
};
