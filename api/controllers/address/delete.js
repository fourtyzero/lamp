module.exports = {


  friendlyName: 'Delete',


  description: 'Delete address.',


  inputs: {
    uid: {
      type: 'string'
    },
    aid: {
      type: 'string'
    }
  },


  exits: {

  },


  // FIXME: security!
  fn: async function ({uid, aid}, exits) {
    await Address.destroy({id: aid});
    // All done.
    return exits.success();

  }


};
