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

  fn: async function(inputs) {
    // All done.
    const product = await Product.findOne({ id: inputs.id });
    return product;
  },
};
