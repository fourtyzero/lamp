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
    }
  },


  exits: {
    success: {
      description: 'yeah seccess'
    }
  },


  fn: async function (inputs, exits) {
    const user = await User.findOne({name: inputs.name})
    .populate('addresses', 'cart' );
    // TODO:
    // if(user)
    // All done.
    return exits.success();

  }


};
