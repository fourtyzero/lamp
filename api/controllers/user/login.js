const _ = require('lodash');

module.exports = {

  friendlyName: 'Login',

  description: 'Login user.',

  inputs: {
    name: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {
      description: 'yeah seccess',
    },

    badCombo: {
      description: `The provided email and password combination does not
      match any user in the database.`,
      responseType: 'unauthorized',
    },
  },

  fn: async function({ name, password }, exits) {
    const user = await User.findOne({
      name: name,
    });
    if (!user) {
      throw 'badCombo';
    }
    await sails.helpers.passwords
      .checkPassword(password, user.password)
      .intercept('incorrect', 'badCombo');
    // return a token
    const token = await sails.helpers.sign.with({
      payload: {uid: user.id}
    });
    // TODO:
    // if(user)
    // All done.
    return _.omit({...user, token}, password);
  },
};
