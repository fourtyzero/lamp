// const { omit } = require('lodash');

module.exports = {
  friendlyName: 'Byid',

  description: 'Byid product.',

  inputs: {
    id: {
      type: 'string',
    },
  },

  exits: {},

  fn: async function({ id }, exits) {
    // All done.
    const product = await Product.findOne({ id }).populate('brand');
    return exits.success(product);
  },
};
