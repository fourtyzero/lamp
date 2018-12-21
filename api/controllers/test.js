module.exports = {
  friendlyName: 'Test',

  description: 'Test something.',

  inputs: {
    type: {
      type: 'number',
    },
  },

  exits: {},

  fn: async function(inputs) {
    switch (inputs.type) {
      case 0:
        return 'a stirng';
      case 1:
        return 3;
      case 2:
        return { a: 3, b: true };
      default:
        return 0;
    }
    // All done.
    // return {};
  },
};
