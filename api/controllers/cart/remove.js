module.exports = {
  friendlyName: 'Remove',

  description: 'Remove cart.',

  inputs: {
    cid: {
      type: 'string',
    },
    pid: {
      type: 'string',
    },
  },

  exits: {},

  fn: async function({ cid, pid }) {
    const cart = await Cart.findOne({ id: cid });
    const ids = cart.items;
    const nids = ids.splice(ids.indexOf(pid), 1);
    await Cart.updateOne({ id: cid }).set({ items: nids });
    // All done.
    return this.res.ok();
  },
};
