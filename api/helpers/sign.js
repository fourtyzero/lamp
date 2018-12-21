const jwt = require('jsonwebtoken');
module.exports = {
  friendlyName: 'Sign',

  description: 'Sign something.',

  inputs: {
    payload: {
      type: 'json'
    }
  },

  exits: {
    success: {
      description: 'All done.',
    },
  },

  fn: async function({payload}) {

    return jwt.sign(payload, sails.config.jwt.token);
    // TODO
  },
};
