const jwt = require('jsonwebtoken');

module.exports = {
  friendlyName: 'Verify',

  description: 'Verify something.',

  inputs: {
    token: {
      type: 'string'
    }
  },

  exits: {
    success: {
      description: 'All done.',
    },
  },

  fn: async function({token}) {
    // TODO
    return jwt.verify(token, sails.config.jwt.token)
  },
};
