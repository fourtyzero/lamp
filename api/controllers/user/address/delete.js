module.exports = {


  friendlyName: 'Delete',


  description: 'Delete address.',


  inputs: {
    id: {
      type: 'string',
      description: 'the address id'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    await Address.destroyOne({id: inputs.id});
    // All done.
    return exits.success();

  }


};
