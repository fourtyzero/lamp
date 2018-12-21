module.exports = {
  friendlyName: 'Tags',

  description: 'Tags category.',

  inputs: {
    cid: {
      type: 'string',
    },
  },

  exits: {},

  fn: async function({ cid }) {
    const c = await Category.findOne({ id: cid }).populate('tags');
    // All done.
    return c.tags;
  },
};
