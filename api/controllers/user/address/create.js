module.exports = {


  friendlyName: 'Create',


  description: 'Create address.',


  inputs: {
    id: {
      type: 'string'
    },
    entity: {
      type: 'json'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const {id, entity} = inputs;
    const addr = await Address.create(entity).fetch();
    await Address.updateOne({id: addr.id})
    .set({owner: id});
    // All done.
    return exits.success();

  }


};
